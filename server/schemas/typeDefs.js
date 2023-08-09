const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    wireframes: [Wireframe]
  }

  type Wireframe {
    _id: ID
    websiteTitle: String
    primaryColor: String
    secondaryColor: String
    websitePurpose: String
    designStyle: String
    apiResponseText: String

    wireframeAuthor: String
    createdAt: String
  }

  type ApiResponseText {
    _id: ID
    message: Message
  }

  type Message {
    _id: ID
    content: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    wireframes(username: String): [Wireframe] 
    users: [User]
    user(username: String): User
    wireframe(wireframeId: ID): Wireframe
    me: User
  }

  type Mutation {
    addWireFrame(websiteTitle: String, primaryColor: String, secondaryColor: String, websitePurpose: String, designStyle: String, apiResponseText: String, wireframeAuthor: String, createdAt: String): Wireframe
    removeWireframe(wireframeId: ID!): Wireframe
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
