import express from "express"
import {ApolloServer } from "@apollo/server";
import {expressMiddleware} from "apollo-server-express"
import bodyParser from "body-parser"
const app = express()

const server = new ApolloServer({
    typeDefs: `
    type Query {
    hello: String
    }`,
    resolvers: {
        Query: {
            hello: () => `Hello GraphQL!`
        }
    }
})

await server.start();

app.use(
    '/graphql',
    bodyParser.json(),
    expressMiddleware(server)
)
export default app;
