const { gql } = require('apollo-server-express');

const typeDefs = gql`
 

  type Wireframe {
    _id: ID
    websiteTitle: String
    primaryColor: String
    secondaryColor: String
    websitePurpose: String
    designStyle: String
    apiResponseText: String
    userText: String
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


  type Query {

    

    wireframes: [Wireframe] 

    }
    
   
  

  type Mutation {
    
    
    
    addWireFrame(websiteTitle: String, primaryColor: String, secondaryColor: String, websitePurpose: String, designStyle: String, apiResponseText: String, userText: String, wireframeAuthor: String, createdAt: String): Wireframe 
  }
`;

module.exports = typeDefs;
