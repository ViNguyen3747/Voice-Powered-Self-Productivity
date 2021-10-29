const express = require("express");
const { ApolloServer } = require("apollo-server-express");

const dotenv = require("dotenv");
dotenv.config();
const { connection } = require("./Database/util");
const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");
connection();

const startServer = async () => {
  const app = express();
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app, path: "/graphql" });
  const PORT = 5000;
  app.use("/", (req, res, next) => {
    res.send({ message: "Hello" });
  });
  app.listen(PORT, () => console.log(`Server listening on PORT: ${PORT}`));
};

startServer();
