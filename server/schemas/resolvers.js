const { AuthenticationError } = require('apollo-server-express');
const { User, Wireframe } = require('../models');
const { signToken } = require('../utils/auth');
const { getOpenAICompletion} = require('../utils/openAI')

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('wireframes');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('wireframes');
    },
    wireframes: async (parent, {username}) => {
      const params = username ? { username } : {};
      return Wireframe.find().sort({ createdAt: -1 });
    },
   
    wireframe: async (parent, { wireframeId }) => {
      return Wireframe.findOne({ _id: wireframeId });
    },


    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('wireframes');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
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
    addWireFrame: async (parent, { websiteTitle, primaryColor, secondaryColor, websitePurpose, designStyle, createdAt }, context) => {
      
        const messages = [
          {role: 'user', content: `Create me an HTML wireframe for a website with the following details: Title: ${websiteTitle}, Primary Color: ${primaryColor}, Secondary Color: ${secondaryColor}, Purpose: ${websitePurpose}, Design Style: ${designStyle}`}
        ];
          const completion = await getOpenAICompletion(messages);
          const apiResponseText = completion || 'Nope!';
      
        const wireframe = await Wireframe.create({
          apiResponseText: apiResponseText[0].message.content,
          createdAt: createdAt,
          websiteTitle: websiteTitle,
          primaryColor: primaryColor,
          secondaryColor: secondaryColor,
          websitePurpose: websitePurpose,
          designStyle: designStyle,
          wireframeAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { wireframes: wireframe._id } },
          { new: true }
        );


       console.log('ResolverPoo1:',apiResponseText[0].message.content)
      console.log('ResolverPoo2:',)

        return wireframe;
        
        
        // throw new AuthenticationError('You need to be logged in!');
      },
    
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
