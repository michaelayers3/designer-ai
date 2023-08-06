import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Landing from './pages/Landing/Landing';
import NewDesign from './pages/Design/NewDesign';
import EditDesign from './pages/Design/EditDesign';
import Profile from './pages/Profile/Profile';
// import Header from './components/Header';

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
            <Routes>
              <Route 
                path="/"
                element={<Landing />}
              />
              <Route 
                path="/me"
                element={<Profile />}
              />
              <Route 
                path="/profiles/:username"
                element={<Profile />}
              />
              <Route 
                path="/design"
                element={<NewDesign />}
              />
              <Route
                path="/thoughts/:thoughtId"
                element={<EditDesign />}
                />
            </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
