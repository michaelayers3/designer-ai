import React from 'react';

const RequestedList = ({
    wireframeText,
    createdAt,
  showTitle = true,
  showUsername = true,
}) => {
  if (!wireframeText.length) {
    console.log('poo')
    return <h3>No wireframes Yet</h3>;
  }

  return (
    <div>
      {showTitle && <h3>{wireframeText}</h3>}
      {wireframeText &&
        wireframeText.map((wireframeText) => (
          <div key={wireframeText._id} className="card mb-3">
            
            <div className="card-body bg-light p-2">
              <p>{wireframeText.wireframeText}
                {wireframeText.createdAt}
              </p>

            </div>
          </div>
        ))}
    </div>
  );
};

export default RequestedList;