const graphql = require('graphql');
const _       = require('lodash');   
const Profile = require('../models/profile-model');
const Video  = require('../models/video-model');

const { GraphQLObjectType,
        GraphQLString,
        GraphQLSchema,
        GraphQLID,
        GraphQLInt,
        GraphQLList,
        GraphQLNonNull
} = graphql;

const profileType = new GraphQLObjectType({
    name: 'profile',
    fields: () => ({
        id:                { type: GraphQLID     },
        name:              { type: GraphQLString },
        expertise:         { type: GraphQLString },
        interests:         { type: GraphQLString },
        lessonsOfInterest: {
            type: new GraphQLList(videoType),
            resolve(parent, args) {
                return Video.find({ interestType: parent.interests });
            }
        }
    })
});

const videoType = new GraphQLObjectType({
    name: 'video',
    fields: () => ({
        id:              { type: GraphQLID     },
        name:            { type: GraphQLString },
        interestType:    { type: GraphQLString },
        skillLevel:      { type: GraphQLString },
        interestedUsers: {
            type: new GraphQLList(videoType),
            resolve(parent, args) {
                return Profile.find({ interests: parent.interestType });
            }
        }
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        profile: {
            type: profileType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return Profile.findById(args.id);
            }
        },
        video: {
            type: videoType,
            args: {id: { type: GraphQLID } },
            resolve(parents, args) {
                return Video.findById(args.id);
            }     
        },
        profiles: {
            type: new GraphQLList(profileType),
            resolve(parent, args) {
                return Profile.find({});
            }
        },
        videos: {
            type: new GraphQLList(videoType),
            resolve(parent, args) {
                return Video.find({});
            }
        }
    }
});
const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addProfile: {
            type: profileType,
            args: {
                name:      { type: new GraphQLNonNull(GraphQLString) },
                expertise: { type: new GraphQLNonNull(GraphQLString) },
                interests: { type: new GraphQLNonNull(GraphQLString) },
            },
            resolve(parent, args) {
                let profile = new Profile({
                    name:      args.name,
                    expertise: args.expertise,
                    interests: args.interests
                });
                return profile.save();
            }
        },
        updateProfile: {
            type: profileType,
            args: {
                id:        { type: new GraphQLNonNull(GraphQLID) },
                name:      { type: GraphQLString },
                expertise: { type: GraphQLString },
                interests: { type: GraphQLString },
            },
            resolve(parent, args) {
                return Profile.findByIdAndUpdate(args.id, {
                        name:      args.name,
                        expertise: args.expertise,
                        interests: args.interests
                }, {new: true}, {upsert: true}, (err, Profile) => {
                    if (err) {
                        console.error(err);
                    }
                    return;
                   console.log(Profile);
                }); 
            }
        },
        deleteProfile: {
            type: profileType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLID) }
            },
            resolve(parent, args) {
                return Profile.findByIdAndRemove(args.id, {    
                }, (err, Profile) => {
                    if (err) {
                        console.error(err);
                    }
                    return;
                });
            }
        },
        addVideo: {
            type: videoType,
            args: {
                name:         { type: new GraphQLNonNull(GraphQLString) },
                interestType: { type: new GraphQLNonNull(GraphQLString) },
                skillLevel:   { type: new GraphQLNonNull(GraphQLString) },
            },
            resolve(parent, args) {
                let video = new Video({
                    name: args.name,
                    interestType: args.interestType,
                    skillLevel: args.skillLevel
                });
                return video.save();
            }
        },
        updateVideo: {
            type: videoType,
            args: {
                id:           { type: new GraphQLNonNull(GraphQLID) },
                name:         { type: GraphQLString },
                skillLevel:   { type: GraphQLString },
                interestType: { type: GraphQLString },
            },
            resolve(parent, args) {
                return Video.findByIdAndUpdate(args.id, {
                        name:         args.name,
                        skillLevel:   args.skillLevel,
                        interestType: args.interestType
                }, {new: true}, (err, Video) => {
                    if (err) {
                        return res.status(500).send(err);
                    }
                    return;
                }); 
            }
        },
        deleteVideo: {
            type: videoType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLID) }
            },
            resolve(parent, args) {
                return Video.findByIdAndRemove(args.id, {    
                }, (err, Video) => {
                    if (err) {
                        console.error(err);
                    }
                    return;
                });
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation
});