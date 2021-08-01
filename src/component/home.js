import React from 'react';
import Hero from './hero-section';
import Posts from './posts';
import Tags from './tags';
import Pagination from './pagination';
import '../styles/home.css';
import { ARTICLES_URL } from '../utils/constant';
import FeedNav from './feedNav';

class Home extends React.Component {
  state = {
    articles: null,
    totalArticles: 0,
    articlesPerPage: 10,
    activePage: 1,
    activeTab: '',
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
    this.fetchData(this.state.activeTab);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.activeTab !== this.state.activeTab) {
      console.log('Worked');
      this.fetchData(this.state.activeTab);
    }
  }

  removeTab = () => {
    this.setState({
      activeTab: '',
    });
  };

  addTab = (value) => {
    this.setState({
      activeTab: value,
    });
  };

  fetchData = (value) => {
    let limit = this.state.articlesPerPage;
    let offSet = (this.state.activePage - 1) * limit;

    if (!value) {
      fetch(ARTICLES_URL + `/?limit=${limit}&offset=${offSet}`)
        .then((res) => res.json())
        .then((data) => {
          this.setState({
            articles: null,
            articles: data.articles,
            totalArticles: data.articlesCount,
          });
        });
    } else if (value) {
      fetch(ARTICLES_URL + `/?limit=${limit}&offset=${offSet}&tag=${value}`)
        .then((res) => res.json())
        .then((data) => {
          this.setState({
            articles: null,
            articles: data.articles,
            totalArticles: data.articlesCount,
          });
        });
    }
  };

  updateCurrentActivePage = (index) => {
    this.setState({ activePage: index }, this.fetchData);
  };

  render() {
    return (
      <>
        <Hero />
        <FeedNav activeTab={this.state.activeTab} removeTab={this.removeTab} />
        <Posts articles={this.state.articles} />
        <Tags addTab={this.addTab} />
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
