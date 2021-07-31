import '../styles/pagination.css';

function Pagination(props) {
  let numberOfPages = Math.ceil(props.totalArticles / props.articlesPerPage);
  let pagesArray = [];
  for (let i = 1; i <= numberOfPages; i++) {
    pagesArray.push(i);
  }

  return (
    <div className="pagination">
      <p
        onClick={() =>
          props.updateCurrentActivePage(
            props.activePage - 1 < 1 ? 1 : props.activePage - 1
          )
        }
      >
        Previous
      </p>
      {pagesArray.map((count) => (
        <span
          onClick={() => props.updateCurrentActivePage(count)}
          className={`${props.activePage === count ? 'activeCount' : ''} `}
        >
          {count}
        </span>
      ))}
      <p
        onClick={() =>
          props.updateCurrentActivePage(
            props.activePage + 1 > 10 ? 10 : props.activePage + 1
          )
        }
      >
        Next
      </p>
    </div>
  );
}

export default Pagination;
