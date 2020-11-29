import "reflect-metadata";
import { ApolloServer } from 'apollo-server-express';
import Express from 'express';
import { buildSchema } from 'type-graphql';
import { HelloResolver } from './resolvers/hello/';
require('./config');

const main = async (): Promise<void> => {
  const schema = await buildSchema({
    resolvers: [HelloResolver]
  });

  const server = new ApolloServer({
    schema,
    context: ({ req, res }: any) => ({ req, res })
  });

  const app = Express();

  server.applyMiddleware({ app });

  app.listen(4000, () => console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`))
};

main();