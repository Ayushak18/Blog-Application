import '../styles/newArticle.css';
import { ARTICLES_URL } from '../utils/constant';
import { withRouter } from 'react-router-dom';

function NewArticle(props) {
  let handleFormSubmit = (event) => {
    event.preventDefault();

    let formData = {
      article: {
        title: event.target.title.value,
        description: event.target.description.value,
        body: event.target.body.value,
        tagList: event.target.tagList.value.split(','),
      },
    };
    fetch(ARTICLES_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Token ${localStorage.app_user}`,
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => props.history.push('/'));
  };

  return (
    <div className="newArticle">
      <h1>Create new article</h1>
      <form onSubmit={handleFormSubmit}>
        <input type="text" placeholder="Title" name="title" />
        <input type="text" placeholder="Description" name="description" />
        <textarea cols="30" rows="10" placeholder="Body" name="body"></textarea>
        <input type="text" placeholder="Tags" name="tagList" />
        <input className="submit-button" type="submit" value="Add Article" />
      </form>
    </div>
  );
}

export default withRouter(NewArticle);
