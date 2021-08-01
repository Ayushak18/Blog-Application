import React from 'react';
import Loader from './loader';
import '../styles/tags.css';
import { TAGS_URL } from '../utils/constant';

class Tags extends React.Component {
  state = {
    tags: null,
  };

  componentDidMount() {
    fetch(TAGS_URL)
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          tags: data.tags,
        })
      );
  }

  render() {
    if (this.state.tags) {
      return (
        <>
          {this.state.tags.map((tag, index) => {
            return (
              <button
                className="tag-button"
                onClick={() => this.props.addTab(tag)}
              >
                {tag}
              </button>
            );
          })}
        </>
      );
    } else {
      return <Loader />;
    }
  }
}

export default Tags;
