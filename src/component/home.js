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
    activePage: 1,
  };

  componentDidMount() {
    // fetch(ARTICLES_URL + `/?limit=${this.state.articlesPerPage}`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     this.setState({
    //       articles: data.articles,
    //       totalArticles: data.articlesCount,
    //     });
    //   });
    this.fetchData();
  }

  fetchData = () => {
    let limit = this.state.articlesPerPage;
    let offSet = (this.state.activePage - 1) * limit;

    fetch(ARTICLES_URL + `/?limit=${limit}&offset=${offSet}`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          articles: null,
          articles: data.articles,
          totalArticles: data.articlesCount,
        });
      });
  };

  updateCurrentActivePage = (index) => {
    this.setState({ activePage: index }, this.fetchData);
  };

  render() {
    return (
      <>
        <Hero />
        <Posts articles={this.state.articles} />
        <Tags />
        <Pagination
          totalArticles={this.state.totalArticles}
          articlesPerPage={this.state.articlesPerPage}
          activePage={this.state.activePage}
          updateCurrentActivePage={this.updateCurrentActivePage}
        />
      </>
    );
  }
}

export default Home;
