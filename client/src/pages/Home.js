import React from 'react';
import {gql} from '@apollo/client'; 
import { useQuery } from '@apollo/client';
import WireframeForm from '../components/test/test';
import RequestedList from '../components/RequestedList';
import { QUERY_WIREFRAMES } from '../utils/queries';
const Home = () => {
  
  const { loading, data } = useQuery(QUERY_WIREFRAMES);
  console.log('Home Poo:', data);
  const wireframes = data?.wireframes || [];
  console.log('Home Poo2:', wireframes);

  return (
    <main> 
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >

        </div>
        <div className="col-12 col-md-8 mb-3">
          <WireframeForm />
          <RequestedList
            wireframes={wireframes}
           />
        </div>
      </div>
    </main>
  );
};

export default Home;
