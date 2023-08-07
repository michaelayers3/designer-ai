const { gql } = require('apollo-server-express');

const typeDefs = gql`
 

  type Wireframe {
    _id: ID
    userText: String
    apiResponseText: [String]
    createdAt: String
  }
  



  type Query {


    wireframes: [Wireframe]
    
   
  }

  type Mutation {
    
    
    
    addWireFrame(userText: String, apiResponseText: [String], createdAt: String): Wireframe
  }
`;

module.exports = typeDefs;
