const { AuthenticationError } = require('apollo-server-express');
const { User, Wireframe } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    // Get all users
    users: async () => {
      return User.find().populate('wireframes');
    },
    // Get a user by username
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('wireframes');
    },
    // Get all wireframes
    wireframes: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Wireframe.find(params).sort({ createdAt: -1 });
    },
    // Get a wireframe by id
    wireframe: async (parent, { thoughtId }) => {
      return Wireframe.findOne({ _id: thoughtId });
    },
    // Get a user by id
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('wireframes');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
    // Add User
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    // Login
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    // Update User
    updateUser: async (parent, { username, email, password }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { username, email, password },
          { new: true }
        );

        return updatedUser;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    // Add Wireframe
    addWireframe: async (parent, { wireframeText }, context) => {
      if (context.user) {
        const wireframe = await Wireframe.create({
          wireframeText,
          wireframeAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { wireframes: wireframe._id } }
        );

        return wireframe;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    // Update Wireframe
    updateWireframe: async (parent, { wireframeId, wireframeText }, context) => {
      if (context.user) {
        const updatedWireframe = await Wireframe.findOneAndUpdate(
          { _id: wireframeId, wireframeAuthor: context.user.username },
          { wireframeText },
          { new: true }
        );

        return updatedWireframe;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    // Remove Wireframe
    removeWireframe: async (parent, { wireframeId }, context) => {
      if (context.user) {
        const wireframe = await Wireframe.findOneAndDelete({
          _id: wireframeId,
          wireframeAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { wireframes: wireframe._id } }
        );

        return wireframe;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;
