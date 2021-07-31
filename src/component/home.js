import React from 'react';
import Hero from './hero-section';
import Posts from './posts';
import Tags from './tags';
import Pagination from './pagination';
import '../styles/home.css';
import { ARTICLES_URL } from '../utils/constant';

class Home extends React.Component {
  state = {
    articles: null,
    totalArticles: 0,
    articlesPerPage: 10,
  };

  componentDidMount() {
    fetch(ARTICLES_URL + `/?limit=${this.state.articlesPerPage}`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          articles: data.articles,
          totalArticles: data.articlesCount,
        });
      });
  }
  render() {
    return (
      <>
        <Hero />
        <Posts articles={this.state.articles} />
        <Tags />
        <Pagination
          totalArticles={this.state.totalArticles}
          articlesPerPage={this.state.articlesPerPage}
        />
      </>
    );
  }
}

export default Home;
