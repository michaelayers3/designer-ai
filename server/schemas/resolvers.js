const { AuthenticationError } = require('apollo-server-express');
const { User, Wireframe } = require('../models');
const { signToken } = require('../utils/auth');
const { getOpenAICompletion } = require('../utils/openAI');
const resolvers = {
  Query: {
    // users: async () => {
    //   return User.find().populate('thoughts');
    // },
    // user: async (parent, { username }) => {
    //   return User.findOne({ username }).populate('thoughts');
    // },
    wireframes: async () => {
      return Wireframe.find().sort({ createdAt: -1 });
    },
    // thought: async (parent, { thoughtId }) => {
    //   return Thought.findOne({ _id: thoughtId });
    // },
    // me: async (parent, args, context) => {
    //   if (context.user) {
    //     return User.findOne({ _id: context.user._id }).populate('thoughts');
    //   }
    //   throw new AuthenticationError('You need to be logged in!');
    // },
  },

  Mutation: {
    // addUser: async (parent, { username, email, password }) => {
    //   const user = await User.create({ username, email, password });
    //   const token = signToken(user);
    //   return { token, user };
    // },
    // login: async (parent, { email, password }) => {
    //   const user = await User.findOne({ email });

    //   if (!user) {
    //     throw new AuthenticationError('No user found with this email address');
    //   }

    //   const correctPw = await user.isCorrectPassword(password);

    //   if (!correctPw) {
    //     throw new AuthenticationError('Incorrect credentials');
    //   }

    //   const token = signToken(user);

    //   return { token, user };
    // },
    addWireFrame: async (parent, { userText, createdAt }, context) => {
      // if (context.user) {
        const messages = [
          {role: 'user', content: userText}
        ];
          const completion = await getOpenAICompletion(messages);
          
          const apiResponseText  = completion?.data?.choices|| 'No response from API';
          
        const wireframe = await Wireframe.create({
          userText: userText,
          apiResponseText: apiResponseText,
          createdAt: createdAt,
        });
       
        console.log('test')
        return wireframe;
      
      // throw new AuthenticationError('You need to be logged in!');
    },

    // removeThought: async (parent, { thoughtId }, context) => {
    //   if (context.user) {
    //     const thought = await Thought.findOneAndDelete({
    //       _id: thoughtId,
    //       thoughtAuthor: context.user.username,
    //     });

    //     await User.findOneAndUpdate(
    //       { _id: context.user._id },
    //       { $pull: { thoughts: thought._id } }
    //     );

    //     return thought;
    //   }
    //   throw new AuthenticationError('You need to be logged in!');
    // },
    
  },
};

module.exports = resolvers;
