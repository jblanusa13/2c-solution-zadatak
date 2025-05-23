export const typeDefs = `#graphql
  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Query {
    users(name:String, email:String): [User]
  }

   type Mutation{
      addUser(name: String!, email: String!): User!
      deleteUser(email: String!): User!
  }
`;
