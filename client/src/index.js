// import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// frontend/index.js

import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import App from './App';

const client = new ApolloClient({
  uri: '/api/graphql', // Replace this with your GraphQL server endpoint
  cache: new InMemoryCache(),
});

const MainApp = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

ReactDOM.render(<MainApp />, document.getElementById('root'));
