import '../styles/post.css';
import { Link } from 'react-router-dom';

function Post(props) {
  return (
    <div className="post-section post-flex">
      <img src={props.article.author.image} alt="" />
      <div className="post-text">
        <h1>
          <Link to={`/articles/${props.article.slug}`}>
            {props.article.title}
          </Link>
        </h1>
        <p>{props.article.author.username}</p>
      </div>
    </div>
  );
}

export default Post;
