
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_WIREFRAME } from '../../utils/mutations';
// import { set } from 'mongoose';

const WireframeForm = () => {
  const [userText, setUserText] = useState('');
  const [apiResponseText, setApiResponseText] = useState('');
  const [createdAt, setCreatedAt] = useState('');
  const [formState, setFormState] = useState({ userText: '' });

  const [addWireframe, { error, data }] = useMutation(ADD_WIREFRAME);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addWireframe({
        variables: {
          userText: userText,
          // apiResponseText: apiResponseText,
        },
      });
      
      
      setUserText('');
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'userText' && value.length <= 280) {
      setUserText(value);
      // setFormState({ ...formState, wireframeText: value });
    }
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <textarea
          placeholder="Here's a new wireframe..."
          value={userText}
          name = 'userText'
          className="form-input col-12 col-md-9"
          onChange={handleChange}
        ></textarea>
        <button className="btn col-12 col-md-3" type="submit">
          Submit
        </button>
      </form>
      {error && <div>Something went wrong...</div>}
      <div>
        <h3>API Response:</h3>
        {/* <p>{apiResponseText}</p> */}
      </div>
    </div>
  );
};

export default WireframeForm;

