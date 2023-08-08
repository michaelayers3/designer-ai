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
  mutation addWireFrame($websiteTitle: String, $primaryColor: String, $secondaryColor: String, $websitePurpose: String, $designStyle: String, $apiResponseText: String, $userText: String, $wireframeAuthor: String, $createdAt: String) {
    addWireFrame(websiteTitle: $websiteTitle, primaryColor: $primaryColor, secondaryColor: $secondaryColor, websitePurpose: $websitePurpose, designStyle: $designStyle, apiResponseText: $apiResponseText, userText: $userText, wireframeAuthor: $wireframeAuthor, createdAt: $createdAt) {
      _id
      websiteTitle
      primaryColor
      secondaryColor
      websitePurpose
      designStyle
      apiResponseText
      userText
      wireframeAuthor
      createdAt
    }
  }
`;

