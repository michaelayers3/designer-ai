// import React, {useState} from 'react';
// import {useMutation} from '@apollo/client';

// import {ADD_WIREFRAME} from '../../utils/mutations';

// const WireframeForm = ( {wireframeText}) => {
//     const [formState, setFormState] = useState('');
//     const [addWireframe, {error, data}] = useMutation(ADD_WIREFRAME);

//     const handleFormSubmit = async (event) => {
//         event.preventDefault();
    
//         try {
//           const { data } = await addWireframe({
//             variables: {
//                 wireframeText
//             },
//           });
    
//             setFormState('');
//         } catch (err) {
//           console.log(wireframeText)
//           console.log('poo')
//           console.log(error);
//         }
//       };
    
//       const handleChange = (event) => {
//         const { name, value } = event.target;
    
//         if (name === 'formText' && value.length <= 280) {
//           setFormState(value);
          
//         }
//       };

//     return (
//         <div>
//             <form onSubmit={handleFormSubmit}>
//                 <textarea
//                     placeholder="Here's a new wireframe..."
//                     value={formState.wireframeText}
//                     className="form-input col-12 col-md-9"
//                     onChange={handleChange}
//                 ></textarea>
//                 <button className="btn col-12 col-md-3" type="submit">
//                     Submit
//                 </button>
//             </form>
//             {error && <div>Something went wrong...</div>}
//         </div>
//     );
// };

// export default WireframeForm;

import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_WIREFRAME } from '../../utils/mutations';
// import { set } from 'mongoose';

const WireframeForm = () => {
  const [wireframeText, setWireframeText] = useState('');
  const [formState, setFormState] = useState({ wireframeText: '' });
  const [addWireframe, { error, data }] = useMutation(ADD_WIREFRAME);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addWireframe({
        variables: {
          wireframeText
        },
      });

      setWireframeText('');
    } catch (err) {
      console.log('poo');
      console.log(wireframeText); 
      console.log(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'wireframeText' && value.length <= 280) {
      setWireframeText(value);
      // setFormState({ ...formState, wireframeText: value });
    }
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <textarea
          placeholder="Here's a new wireframe..."
          value={wireframeText}
          name = 'wireframeText'
          className="form-input col-12 col-md-9"
          onChange={handleChange}
        ></textarea>
        <button className="btn col-12 col-md-3" type="submit">
          Submit
        </button>
      </form>
      {error && <div>Something went wrong...</div>}
    </div>
  );
};

export default WireframeForm;

