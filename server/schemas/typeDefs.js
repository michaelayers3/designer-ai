const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    wireframes: [Wireframe]!
  }

  type Wireframe {
    _id: ID
    websiteTitle: String
    primaryColor: String
    secondaryColor: String
    websitePurpose: String
    designStyle: String
    htmlCode: String
    wireframeAuthor: String
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    wireframes(username: String): [Wireframe]
    wireframe(wireframeId: ID!): Wireframe
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addWireframe(wireframeText: String!): Wireframe
    removeWireframe(wireframeId: ID!): Wireframe
    updateUser(username: String!, email: String!, password: String!): User
    updateWireframe(wireframeId: ID!, wireframeText: String!): Wireframe
    }
`;

module.exports = typeDefs;
