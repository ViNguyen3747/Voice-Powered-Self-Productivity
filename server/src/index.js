import express from "express";
import { error, success } from "consola";
import { ApolloServer } from "apollo-server-express";
import { connection } from "./Database/util/index.js";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import { AuthMiddleware } from "./middleware/auth.js";
dotenv.config();
import { schemaDirectives } from "./directives/index.js";
import * as AppModels from "./Database/Models/index.js";
import typeDefs from "./typeDefs/index.js";
import resolvers from "./resolvers/index.js";
const app = express();
app.disable("x-powered-by");
app.use(bodyParser.json());
app.use(cors());
const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  schemaDirectives,
  context: async ({ req }) => {
    const { user, isAuth } = await AuthMiddleware(req);
    console.log(user, isAuth);
    return {
      req,
      user,
      isAuth,
      ...AppModels,
    };
  },
});

const startServer = async () => {
  try {
    await apolloServer.start();
    apolloServer.applyMiddleware({ app, cors: true, path: "/graphql" });
    const PORT = 5000;
    app.use("/", (req, res, next) => {
      res.send({ message: "Hello" });
    });
    await connection();
    app.listen(PORT, () =>
      success({
        badge: true,
        message: `Server ready on PORT: ${PORT}`,
      })
    );
  } catch (err) {
    error({
      badge: true,
      message: err.message,
    });
  }
};

startServer();
