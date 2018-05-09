const graphql = require('graphql');
const _       = require('lodash');                                     

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

// dummy data (remove later and replace with database)
var profiles = [
    {id: '1', name: 'john Bean', expertise: 'hardware', interests: 'familiar'},
    {id: '2', name: 'Elon Musk', expertise: 'rockets', interests: 'adept'},
    {id: '3', name: 'Jennifer Lopez', expertise: 'software and design', interests: 'beginner'}
];

const profileType = new GraphQLObjectType({
    name: 'profile',
    fields: () => ({
        id:         { type: GraphQLString },
        name:       { type: GraphQLString },
        expertise:  { type: GraphQLString },
        interests:  { type: GraphQLString }
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        profile: {
            type: profileType,
            args: { id: { type: GraphQLString } },
            resolve(parent, args){
                // code to get data from db / other source
                return _.find(profiles, {id: args.id});
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});