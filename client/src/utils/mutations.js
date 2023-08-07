import { gql } from '@apollo/client';

//Login user
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
//Add user
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
//Add wireframe
export const ADD_WIREFRAME = gql`
  mutation AddWireframe($wireframeText: String!) {
    addWireframe(wireframeText: $wireframeText) {
      _id
      websiteTitle
      primaryColor
      secondaryColor
      websitePurpose
      designStyle
      htmlCode
      wireframeAuthor
      createdAt
    }
  }
`;

//Remove wireframe
export const REMOVE_WIREFRAME = gql`
  mutation RemoveWireframe($wireframeId: ID!) {
    removeWireframe(wireframeId: $wireframeId) {
      _id
      websiteTitle
      primaryColor
      secondaryColor
      websitePurpose
      designStyle
      htmlCode
      wireframeAuthor
      createdAt
    }
  }
`;

//Update user
export const UPDATE_USER = gql`
  mutation UpdateUser($username: String!, $email: String!, $password: String!) {
    updateUser(username: $username, email: $email, password: $password) {
      _id
      username
      email
      password
    }
  }
`;

//Update wireframe
export const UPDATE_WIREFRAME = gql`
  mutation UpdateWireframe($wireframeId: ID!, $wireframeText: String!) {
    updateWireframe(wireframeId: $wireframeId, wireframeText: $wireframeText) {
      _id
      websiteTitle
      primaryColor
      secondaryColor
      websitePurpose
      designStyle
      htmlCode
      wireframeAuthor
      createdAt
    }
  }
`;