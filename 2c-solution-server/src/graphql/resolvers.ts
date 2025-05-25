import { GraphQLError } from "graphql";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const resolvers = {
  Query: {
    users: async (parent, args) => {
      const users = await prisma.user.findMany();
      return users.filter((user) => {
        if (
          (!args.name || user.name === args.name) &&
          (!args.email || user.email === args.email)
        )
          return true;
      });
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const foundUser = await prisma.user.findUnique({
        where: {
          email: args.email,
        },
      });
      if (foundUser) {
        throw new GraphQLError("User already exists", {
          extensions: {
            code: "DUPLICATE_EMAIL",
          },
        });
      }
      const user = await prisma.user.create({
        data: {
          name: args.name,
          email: args.email,
        },
      });
      return user;
    },
    deleteUser: async (parent, args) => {
      const user = await prisma.user.findUnique({
        where: {
          email: args.email,
        },
      });
      if (!user) {
        throw new GraphQLError("User does not exist", {
          extensions: {
            code: "NOT_EXIST",
          },
        });
      }
      const deleteUser = await prisma.user.delete({
        where: {
          email: args.email,
        },
      });
      return deleteUser;
    },
  },
};
