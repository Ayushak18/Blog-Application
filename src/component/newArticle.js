import '../styles/newArticle.css';

function NewArticle() {
  return (
    <div className="newArticle">
      <h1>Create new article</h1>
      <form>
        <input type="text" placeholder="Title" name="title" />
        <input type="text" placeholder="Description" name="descriptions" />
        <textarea cols="30" rows="10" placeholder="Body"></textarea>
        {/* <input type="text" placeholder="Tags" /> */}
        <input className="submit-button" type="submit" value="Add Article" />
      </form>
    </div>
  );
}

export default NewArticle;
