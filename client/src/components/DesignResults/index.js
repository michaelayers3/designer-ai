import React from "react";
import { CodeBlocks, CodeResults, CodeResultsContainer, ResultsCreated } from "./DesignResultsStyle";

const CommentList = ({ comments = [] }) => {
  return (
    <CodeResultsContainer>
      {comments &&
        comments.map((comment) => (
          <CodeResults key={comment._id}>
            <ResultsCreated>Design Created: {comment.createdAt}</ResultsCreated>
            <CodeBlocks>{comment.commentText}</CodeBlocks>
          </CodeResults>
        ))}
    </CodeResultsContainer>
  );
};

export default CommentList;
