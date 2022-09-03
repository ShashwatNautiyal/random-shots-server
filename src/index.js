const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schemas");
const resolvers = require("./resolvers");
const UnsplashAPI = require("./datasources/unsplash-api");

async function startApolloServer(typeDefs, resolvers) {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => {
      return {
        unsplashAPI: new UnsplashAPI()
      };
    }
  });

  const { url, port } = await server.listen({ port: process.env.PORT || 4000 });
  console.log(`
        🚀  Server is running
        🔉  Listening on port ${port}
        📭  Query at ${url}
        🌐  Explore at https://studio.apollographql.com/sandbox/explorer
      `);
}

startApolloServer(typeDefs, resolvers);
