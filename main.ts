import "reflect-metadata";
import path from "path";
const util = require('util')
import { PrismaClient } from "./generated/prisma-client-js";
import { resolvers } from "./generated/type-graphql";
import { buildSchemaSync } from "type-graphql";
import { ApolloServer } from 'apollo-server-koa';
import {
  ApolloServerPluginLandingPageLocalDefault,
  ApolloServerPluginDrainHttpServer,
} from "apollo-server-core";
import Koa from 'koa';
import http from 'http';
const prisma = new PrismaClient();
const PORT = process.env.PORT || 4001;
async function bootstrap() {
  // ... Building schema here
  const schema = await buildSchemaSync({
    resolvers,
    dateScalarMode: "timestamp",
    emitSchemaFile: path.resolve(__dirname, "./graphql/shema.graphql"),
    validate: false,
  });
  // const { typeDefs, resolvers:any } = await buildTypeDefsAndResolvers({
  //   resolvers
  // });
  // const schema = makeExecutableSchema({ typeDefs, resolvers:any });
  // Create the GraphQL server
  const httpServer = http.createServer();
  const server = new ApolloServer({
    schema,
    csrfPrevention: true,
    cache: 'bounded',
    introspection: true,
    context: () => ({ prisma }),
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
      ApolloServerPluginLandingPageLocalDefault({ embed: true }),
    ],
  });
  // Start the server
  await server.start();
  const app = new Koa();
  server.applyMiddleware({ app });
  httpServer.on('request', app.callback());
  await new Promise<void>(resolve => httpServer.listen({ port: PORT }, resolve));
  console.log(`🚀 Server ready at http://localhost:4001${server.graphqlPath}`);
  return { server, app };
}
bootstrap(); // actually run the async function