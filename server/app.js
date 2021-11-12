const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const conection = require("./Database/util/index");
const dotenv = require("dotenv");
const { authMiddleware } = require("./middleware/auth");
dotenv.config();
const { connection } = require("./Database/util");
const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");

const startServer = async () => {
  const app = express();
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware,
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app, path: "/graphql" });
  const PORT = 5000;
  app.use("/", (req, res, next) => {
    res.send({ message: "Hello" });
  });
  await connection();
  app.listen(PORT, () => console.log(`Server listening on PORT: ${PORT}`));
};

startServer();
