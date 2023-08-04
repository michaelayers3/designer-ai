
const RequestedList = ({ wireframes }) => {
  if (!wireframes.length) {
    return <h3>No wireframes here...</h3>;
  }

  return (
    <div>
    <h3>Wireframes:</h3>
    {wireframes.map((wireframe) => (
      <div key={wireframe._id}>
        <p>{wireframe.userText}</p>
        <p>{wireframe.apiResponseText}</p>
        <p>{wireframe.createdAt}</p>
      </div>
    ))}
  </div>
  );
};

export default RequestedList;