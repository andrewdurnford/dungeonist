import { PrismaClient } from "@prisma/client";
import { ApolloServer, gql } from "apollo-server-express";
import * as bcrypt from "bcrypt";
import * as cors from "cors";
import * as express from "express";
import * as jwt from "jsonwebtoken";
import { IResolvers } from "./utils/types";

const typeDefs = gql`
  type Mutation {
    signup(input: SignupInput!): User
    login(input: LoginInput!): String
  }

  type Query {
    users: [User!]!
  }

  input SignupInput {
    email: String!
    password: String!
  }

  input LoginInput {
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
    login: async (_, { input: { email, password } }, ctx) => {
      const user = await ctx.prisma.user.findUnique({
        where: { email },
      });

      if (!user) throw new Error(`Email or Password was incorrect`);

      const match = await bcrypt.compare(password, user.password);

      if (!match) throw new Error(`Email or Password was incorrect`);

      const token = jwt.sign({ sub: user.id }, "secret");

      return token;
    },
  },
};

const app = express();

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

const prisma = new PrismaClient();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    try {
      const header = req.headers.authorization;
      const token = header.replace("Bearer ", "");
      const payload = jwt.verify(token, "secret") as any;
      const id = payload.sub;

      const user = await prisma.user.findUnique({ where: { id } });

      return { prisma, user };
    } catch {
      return { prisma };
    }
  },
});

server.start().then(() => server.applyMiddleware({ app }));

app.listen({ port: 4000 }, () => {
  console.log(`🚀  Server ready at http://localhost:4000${server.graphqlPath}`);
});
