import '../styles/feedNav.css';
import { Link } from 'react-router-dom';

function FeedNav(props) {
  return (
    <div className="feedNav">
      <Link
        onClick={props.removeTab}
        to="/"
        className={!props.activeTab ? 'feedNav-active' : ''}
      >
        Global Feed
      </Link>
      {props.activeTab ? (
        <Link className="feedNav-active" to="/">
          #{props.activeTab}
        </Link>
      ) : (
        ''
      )}
    </div>
  );
}

export default FeedNav;
