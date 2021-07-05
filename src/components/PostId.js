import { useState } from "react";
import { Link } from "react-router-dom";

const PostId = () => {
  const [post, setPost] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleData = (e) => {
    setPost(e.target.value);
  };
  return (
    <form className="text-center" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="mb-3" htmlFor="postId">
          Post Id
        </label>
        <input
          onChange={handleData}
          type="text"
          className="form-control"
          id="postId"
        />
      </div>
      <Link className="btn btn-primary mt-4" to={`/post/${post}`}>
        go to post page
      </Link>
    </form>
  );
};

export default PostId;
