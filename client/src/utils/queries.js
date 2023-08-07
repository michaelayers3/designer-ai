import { gql } from '@apollo/client';

//Returns a user by username
//It returns the user's username, email, password, and wireframes
export const QUERY_USER = gql`
query User($username: String!) {
  user(username: $username) {
    _id
    username
    email
    password
    wireframes {
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
}
`;

//Returns all wireframes of a specific user
//Kind of redundant based on the above query
export const QUERY_USER_WIREFRAMES = gql`
query Wireframes($username: String) {
  wireframes(username: $username) {
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




//Returns the data for the user that is currently logged in
//This may be the only necesssary query
export const QUERY_ME = gql`
me {
  _id
  username
  email
  password
  wireframes {
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
