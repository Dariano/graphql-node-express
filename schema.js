const fetch = require('node-fetch')
const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLList
} = require('graphql')

const ReposType = new GraphQLObjectType({
    name: 'Author',
    description: '...',

    fields: () => ({
        id: {
            type: GraphQLInt,
            resolve: data => data.id
        },
        nome: {
            type: GraphQLString,
            resolve: data => data.name
        },
        nome_completo: {
            type: GraphQLString,
            resolve: data => data.full_name
        }
    })
})

module.exports = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        description: '...',

        fields: () => ({
            repos: {
                type: new GraphQLList(ReposType),
                args: {
                    nome: { type: GraphQLString }
                },
                resolve: (root, args) => {
                    return fetch(`https://api.github.com/users/${args.nome}/repos`)
                        .then(res => res.json())
                }
            }
        })
    })
})
