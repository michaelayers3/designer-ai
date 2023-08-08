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
        userText
        wireframeAuthor
        createdAt
      }
    }
  }
`;

export const QUERY_WIREFRAMES = gql`
  query wireframes {
    wireframes {
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
// export const QUERY_WIREFRAMES = gql`
//   query wireframes {
//     wireframes {
//       _id
//       userText
//       createdAt
//       apiResponseText {
//         _id
//         message {
//           _id
//           content
//         }
//       }
//     }
//   }
// `;

export const QUERY_SINGLE_THOUGHT = gql`
  query getSingleThought($thoughtId: ID!) {
    thought(thoughtId: $thoughtId) {
      _id
      thoughtText
      thoughtAuthor
      createdAt
      comments {
        _id
        commentText
        commentAuthor
        createdAt
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      thoughts {
        _id
        thoughtText
        thoughtAuthor
        createdAt
      }
    }
  }
`;
