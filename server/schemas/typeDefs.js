const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    thoughts: [Thought]!
  }


  

  type Wireframe {
    _id: ID
    wireframeText: String
    createdAt: String
  }
  

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User

    wireframes(_id: String, wireframeText: String, createdAt: String): [Wireframe]
    
    thought(thoughtId: ID!): Thought
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addThought(thoughtText: String!): Thought
    removeThought(thoughtId: ID!): Thought
    
    addWireFrame(wireframeText: String!): Wireframe
  }
`;

module.exports = typeDefs;
