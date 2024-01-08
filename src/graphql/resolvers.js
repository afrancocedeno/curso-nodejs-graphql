// where resolvers are located
const resolvers = {

  Query: {

    hello: () => 'hello world',

    getPerson: (_, args) => `Hello ${args.name} and I am ${args.age} years`,

    getInt: () => null,

    getFloat: () => 1.1,

    getString: () => 'string',

    getBoolean: () => true,

    getID: () => '12781255282',

  }
}

module.exports = resolvers