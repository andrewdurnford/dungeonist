import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";
import { IResolvers } from "../utils/graphql";

export const resolvers: IResolvers = {
  Query: {
    user: async (_, {}, ctx) => {
      return ctx.user || null;
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

      const token = jwt.sign({ sub: user.id }, "secret");

      return { token, user };
    },
    login: async (_, { input: { email, password } }, ctx) => {
      const user = await ctx.prisma.user.findUnique({
        where: { email },
      });

      if (!user) throw new Error(`Email or Password was incorrect`);

      const match = await bcrypt.compare(password, user.password);

      if (!match) throw new Error(`Email or Password was incorrect`);

      const token = jwt.sign({ sub: user.id }, "secret");

      return { token, user };
    },
  },
};
