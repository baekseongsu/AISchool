import React from "react";
import { useSelector } from "react-redux";

const CommentItem = ({ comment }) => {
  return (
    <p>
      <strong>{comment.content}</strong> 작성자:{comment.writer}
    </p>
  );
};

export default CommentItem;
