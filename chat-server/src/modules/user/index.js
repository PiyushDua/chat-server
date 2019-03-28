const { ApolloServer, PubSub } = require('apollo-server')
const typeDefs = require('./schema')
const resolvers = require('./resolver')

const pubsub = new PubSub()
const server = new ApolloServer({ typeDefs, resolvers, context: { pubsub } })

server.listen(4000).then(() => {
    console.log(`🚀 Server ready at 4000`);
});