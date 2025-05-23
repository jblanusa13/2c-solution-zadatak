import { GraphQLError } from "graphql";
import { db } from "../data/users.js";
import { v4 as uuidv4 } from "uuid";

export const resolvers = {
  Query: {
    users: (parent, args) => {
      return db.users.filter((user) => {
        if (
          (!args.name || user.name === args.name) &&
          (!args.email || user.email === args.email)
        )
          return true;
      });
    },
  },
  Mutation: {
    addUser: (parent, args) => {
      const foundUser = db.users.find((user) => user.email === args.email);
      if (foundUser) {
        throw new GraphQLError("User already exists", {
          extensions: {
            code: "DUPLICATE_EMAIL",
          },
        });
      }
      const user = { id: uuidv4(), name: args.name, email: args.email };
      db.users.push(user);
      return user;
    },
    deleteUser: (parent, args) => {
      const user = db.users.find((user) => user.email === args.email);
      if (!user) {
        throw new GraphQLError("User does not exist", {
          extensions: {
            code: "NOT_EXIST",
          },
        });
      }
      db.users = db.users.filter((user) => user.email !== args.email);
      return user;
    },
  },
};
