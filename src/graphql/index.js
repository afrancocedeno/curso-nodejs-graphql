const { ApolloServer } = require('apollo-server-express')
const { ApolloServerPluginLandingPageGraphQLPlayground } = require('apollo-server-core')
const { loadFiles } = require('@graphql-tools/load-files')
const  resolvers  = require('./resolvers')

// this is type definiton in graph ql where queries are located
/* const typeDefs = `

  type Query {

    hello: String

    getPerson(name: String, age: Int): String

    getInt: Int!

    getFloat: Float

    getString: String

    getBoolean: Boolean

    getID: ID

  }
` */

const useGraphql = async (app) => {

  const server = new ApolloServer({

    typeDefs: await loadFiles('./src/graphql/schema.graphql'),

    resolvers,

    playground: true,

    plugins: [

      ApolloServerPluginLandingPageGraphQLPlayground

    ]
  })

  await server.start()

  server.applyMiddleware({ app })

}

module.exports = useGraphql