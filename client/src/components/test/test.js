
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_WIREFRAME } from '../../utils/mutations';
// import { set } from 'mongoose';

const WireframeForm = () => {
  const [websiteTitle, setWebsiteTitle] = useState('');
  const [primaryColor, setPrimaryColor] = useState('');
  const [secondaryColor, setSecondaryColor] = useState('');
  const [websitePurpose, setWebsitePurpose] = useState('');
  const [designStyle, setDesignStyle] = useState('');
  const [apiResponseText, setApiResponseText] = useState('');
  const [createdAt, setCreatedAt] = useState('');
  const [formState, setFormState] = useState({ userText: '' });

  const [addWireframe, { error, data }] = useMutation(ADD_WIREFRAME);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addWireframe({
        variables: {
          websiteTitle: websiteTitle,
          primaryColor: primaryColor,
          secondaryColor: secondaryColor,
          websitePurpose: websitePurpose,
          designStyle: designStyle
          // apiResponseText: apiResponseText,
        },
      });
      
      
      // setUserText('');
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'websiteTitle') {
      setWebsiteTitle(value);
    }
    if (name === 'primaryColor') {
      setPrimaryColor(value);
    }
    if (name === 'secondaryColor') {
      setSecondaryColor(value);
    }
    if (name === 'websitePurpose') {
      setWebsitePurpose(value);
    }
    if (name === 'designStyle') {
      setDesignStyle(value);
    }
      // setFormState({ ...formState, wireframeText: value });
    }


  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <h3>Wireframe Form</h3>
        <p>Website Title</p>
        <input name='websiteTitle' value={websiteTitle}  type="text" className="form-input col-12 col-md-9" onChange={handleChange} placeholder="Website Title" />
        <p>Primary Color</p>
        <input name='primaryColor' value={primaryColor} type="color" className="form-input col-12 col-md-9" onChange={handleChange} placeholder="Primary Color" />
        <p>Secondary Color</p>
        <input name='secondaryColor' value={secondaryColor} type="color" className="form-input col-12 col-md-9" onChange={handleChange} placeholder="Secondary Color" />
        <p>Website Purpose</p>
        <input name='websitePurpose' value={websitePurpose}  type="text" className="form-input col-12 col-md-9" onChange={handleChange} placeholder="Website Purpose" />
        <p>Design Style</p>
        <input name='designStyle' value={designStyle} type="text" className="form-input col-12 col-md-9" onChange={handleChange} placeholder="Design Style" />
      
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

