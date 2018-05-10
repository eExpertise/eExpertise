const graphql = require('graphql');
const _       = require('lodash');                                     

const { GraphQLObjectType,
        GraphQLString,
        GraphQLSchema,
        GraphQLID
    } = graphql;

// dummy data (remove later and replace with database)
var profiles = [
    {id: '1', name: 'john Bean', expertise: 'hardware', interests: 'familiar'},
    {id: '2', name: 'Elon Musk', expertise: 'rockets', interests: 'adept'},
    {id: '3', name: 'Jennifer Lopez', expertise: 'hardware and design', interests: 'beginner'}
];

var lessons = [
    {id: 'a', timeline: '1', name: 'how to build a computer', expertise: 'hardware', interests: 'familiar'},
    {id: 'b', timeline: '2', name: 'rocket science 101', expertise: 'rockets', interests: 'adept'},
    {id: 'c', timeline: '3', name: 'Jennifer Lopez', expertise: 'software and design', interests: 'beginner'}
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
            args: { id: { type: GraphQLID } },
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