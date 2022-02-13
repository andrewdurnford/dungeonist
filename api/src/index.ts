import { PrismaClient } from "@prisma/client";
import { ApolloServer } from "apollo-server-express";
import * as cors from "cors";
import * as express from "express";
import * as jwt from "jsonwebtoken";
import { typeDefs } from "./utils/graphql";
import { getResolvers } from "./utils/resolvers";

// TODO: Support top-level await to remove this wrapper function
(async () => {
  await getResolvers();

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
    // TODO: Return a 'resolvers' object from 'utils/resolvers'
    resolvers: await getResolvers(),
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
    console.log(
      `🚀  Server ready at http://localhost:4000${server.graphqlPath}`
    );
  });
})();
