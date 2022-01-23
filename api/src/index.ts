import { PrismaClient } from "@prisma/client";
import { ApolloServer, gql } from "apollo-server";
import * as bcrypt from "bcrypt";
import { IResolvers } from "./utils/types";

const typeDefs = gql`
  type Mutation {
    signup(input: SignupInput!): User
  }

  type Query {
    users: [User!]!
  }

  input SignupInput {
    email: String!
    password: String!
  }

  type User {
    id: ID!
    email: String!
  }
`;

const resolvers: IResolvers = {
  Query: {
    users: async (_, {}, ctx) => {
      return await ctx.prisma.user.findMany();
    },
  },

  Mutation: {
    signup: async (_, { input: { email, password } }, ctx) => {
      let user = await ctx.prisma.user.findUnique({
        where: {
          email,
        },
      });

      if (user) throw new Error("Email is already taken");

      user = await ctx.prisma.user.create({
        data: {
          email: email,
          password: await bcrypt.hash(password, 10),
        },
      });

      return user;
    },
  },
};

const prisma = new PrismaClient();

const server = new ApolloServer({ typeDefs, resolvers, context: { prisma } });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
