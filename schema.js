const fetch = require('node-fetch')
const util = require('util')
const parseXML = util.promisify(require('xml2js').parseString)
const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString
} = require('graphql')

// fetch(
//     'https://www.goodreads.com/author/show.xml?id=4432&key=risKm8wwXsIcyEiTktvA'
// )
// .then(res => res.text())
// .then(parseXML)

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    description: '...',

    fields: () => ({
        name: {
            type: GraphQLString
        }
    })
})

module.exports = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        description: '...',

        fields: () => ({
            author: {
                type: AuthorType,
                args: {
                    id: { type: GraphQLInt}
                },
                resolve: (root, args) => {
                    return {
                        name: 'dariano'
                    }
                }
            }
        })
    })
})
