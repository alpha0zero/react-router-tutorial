const Post = ({ match }) => {
  return (
    <h1 className="text-center text-success"> Post ID = {match.params.id}</h1>
  );
};

export default Post;
