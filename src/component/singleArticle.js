import React from 'react';
import { ARTICLES_URL } from '../utils/constant';
import Loader from './loader';
import '../styles/singleArticle.css';

class SingleArticle extends React.Component {
  constructor() {
    super();
    this.state = {
      article: '',
    };
  }
  componentDidMount() {
    fetch(ARTICLES_URL + `/${this.props.match.params.slug}`)
      .then((res) => res.json())
      .then((data) => this.setState({ article: data }));
  }

  render() {
    if (this.state.article) {
      return (
        <div className="singleArticle">
          <h1>{this.state.article.article.title}</h1>
          <div className="singleArticle-secondary-data">
            <p className="singleArticle-body">
              {this.state.article.article.body}
            </p>
            <div className="singleArticle-userInfo">
              <p className="singleArticle-username">
                Username - {this.state.article.article.author.username}
              </p>
              <img
                src={this.state.article.article.author.image}
                alt={this.state.article.article.author.username}
              />
              <p className="singleArticle-date">
                Date - {this.state.article.article.createdAt}
              </p>
            </div>
          </div>
        </div>
      );
    } else {
      return <Loader />;
    }
  }
}

export default SingleArticle;
