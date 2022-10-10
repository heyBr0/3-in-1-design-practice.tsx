import "../styles/comments.css";
import { useState, useEffect } from "react";

const Comments = () => {
  const initialState = JSON.parse(localStorage.getItem("comments") || "");

  useEffect(() => {
    if (initialState) {
      setComments(initialState);
    }
  }, []);

  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<string[]>([]);
  const submitComment = () => {
    setComments((comments) => [...comments, comment]);
    setComment("");
  };
  const onChangeHandler = (e: React.ChangeEvent<any>): void => {
    setComment(e.target.value);
  };

  const deleteComments = () => {
    setComments([]);
  };

  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  return (
    <div id="commentsComponent">
      <div>
        <h4>Hey, leave your comment here:</h4>
        <textarea value={comment} onChange={onChangeHandler} />
        <br />
        <button onClick={submitComment}>Submit</button>
      </div>
      {comments.map((text, index) => (
        <div key={index} className="commentContainer">
          {text}
        </div>
      ))}
      {comments.length > 0 && (
        <button onClick={deleteComments}>Delete All</button>
      )}
    </div>
  );
};

export default Comments;
