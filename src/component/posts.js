import React from 'react';
import Post from './post';
import '../styles/posts.css';

function Posts(props) {
  if (props.articles) {
    return (
      <div className="posts">
        {props.articles.map((article, index) => (
          <Post key={index} article={article} />
        ))}
      </div>
    );
  } else {
    return (
      <div className="loader-flex">
        <div className="ripple-loader">
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }
}
// state = {
//   articles: null,
// };

// componentDidMount() {
//   fetch(ARTICLES_URL + '/?limit=10')
//     .then((res) => res.json())
//     .then((data) => {
//       this.setState({
//         articles: data.articles,
//       });
//     });
// }

// render() {
// if (this.state.articles) {
//   return (
//     <>
//       {this.state.articles.map((article, index) => (
//         <Post key={index} article={article} />
//       ))}
//     </>
//   );
// } else {
//   return (
//     <div className="loader-flex">
//       <div className="ripple-loader">
//         <div></div>
//         <div></div>
//       </div>
//     </div>
//   );
// }
// }

export default Posts;
