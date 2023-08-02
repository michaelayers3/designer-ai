import React from 'react';
import YourComponent from '../components/test.js';

const Home = () => {
 


  return (
    <div className="card bg-white card-rounded w-50">
      <div className="card-header bg-dark text-center">
        <h1>OpenAI Generate Text</h1>
        <YourComponent />
      </div>
    </div>
  );
};

export default Home;
