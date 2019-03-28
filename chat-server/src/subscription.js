const { PubSub, ApolloServer } = require('apollo-server');
const typeDefs = require('../src/modules/user/schema');
const resolvers = require('../src/modules/user/resolver');

const pubsub = new PubSub();
const server = new ApolloServer({ typeDefs, resolvers, context: { pubsub } });

// server.listen().then(() => {
//     console.log(`🚀 Server ready at 4000`);
// });