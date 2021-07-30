import React from 'react';
import Post from './post';
import '../styles/posts.css';
import { ARTICLES_URL } from '../utils/constant';

class Posts extends React.Component {
  state = {
    articles: null,
  };

  componentDidMount() {
    fetch(ARTICLES_URL + '/?limit=10')
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          articles: data.articles,
        });
      });
  }

  render() {
    if (this.state.articles) {
      return (
        <>
          {this.state.articles.map((article, index) => (
            <Post key={index} article={article} />
          ))}
        </>
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
}

export default Posts;
