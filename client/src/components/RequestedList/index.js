
const RequestedList = ({
  wireframes,
  userText,
  message,
  apiResponseText

}) => {
  if (!wireframes.length) {
    return <h3>No wireframes here...</h3>;
  }
  console.log(wireframes.apiResponseText)
  return (
    <div>
    <h3>Wireframes:</h3>
    {wireframes.map((wireframes) => (
      <div key={wireframes._id}>
       {/* <p>User Text: {wireframes.userText}</p> */}
       <p>Response: {wireframes.apiResponseText}</p>
       <p>Created: {wireframes.createdAt} </p>
       {/* <p>Response: {wireframes.message}</p> */}
       {/* <p>Response: {wireframes.apiResponseText[0].message.content}</p> */}
      </div>
    ))}
  </div>
  );
};

export default RequestedList;