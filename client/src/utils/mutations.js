import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_WIREFRAME = gql`
  mutation addWireFrame($websiteTitle: String, $primaryColor: String, $secondaryColor: String, $websitePurpose: String, $designStyle: String, $apiResponseText: String, $wireframeAuthor: String, $createdAt: String) {
    addWireFrame(websiteTitle: $websiteTitle, primaryColor: $primaryColor, secondaryColor: $secondaryColor, websitePurpose: $websitePurpose, designStyle: $designStyle, apiResponseText: $apiResponseText, wireframeAuthor: $wireframeAuthor, createdAt: $createdAt) {
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

export const REMOVE_WIREFRAME = gql`
  mutation removeWireframe($wireframeId: ID!) {
    removeWireframe(wireframeId: $wireframeId) {
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

export const UPDATE_WIREFRAME = gql`
  mutation updateWireframe($wireframeId: ID, $apiResponseText: String) {
    updateWireframe(wireframeId: $wireframeId, apiResponseText: $apiResponseText) {
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