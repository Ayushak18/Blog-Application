import '../styles/post.css';

function Post(props) {
  return (
    <div className="post-section post-flex">
      <img src={props.article.author.image} alt="" />
      <div className="post-text">
        <h1>{props.article.title}</h1>
        <p>{props.article.author.username}</p>
      </div>
    </div>
  );
}

export default Post;
