import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      wireframes {
        _id
        websiteTitle
        primaryColor
        secondaryColor
        websitePurpose
        designStyle
        apiResponseText
        
        wireframeAuthor
        createdAt
      }
    }
  }
`;

export const QUERY_WIREFRAMES = gql`
  query getWireframes {
    wireframes {
      _id
      websiteTitle
      primaryColor
      secondaryColor
      websitePurpose
      designStyle
      apiResponseText
      
      wireframeAuthor
      createdAt
    }
  }
`;

export const QUERY_SINGLE_WIREFRAME = gql`
  query getSingleWireframe($wireframeId: ID!) {
    wireframe(wireframeId: $wireframeId) {
      _id
      websiteTitle
      primaryColor
      secondaryColor
      websitePurpose
      designStyle
      apiResponseText
      
      wireframeAuthor
      createdAt
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      wireframes {
        _id
        websiteTitle
        primaryColor
        secondaryColor
        websitePurpose
        designStyle
        apiResponseText
        wireframeAuthor
        createdAt
      }
    }
  }
`;
