const { mergeTypeDefs } = require("@graphql-tools/merge");

const RandomPhoto = require("./randomPhoto.js");
const Topic = require("./topic.js");
const UserProfile = require("./userProfile.js");
const UserPhotos = require("./userPhotos.js");
const TopicPhotos = require("./topicPhotos.js");

const types = [Topic, RandomPhoto, UserProfile, UserPhotos, TopicPhotos];

const jsSchema = mergeTypeDefs(types);

module.exports = jsSchema;
