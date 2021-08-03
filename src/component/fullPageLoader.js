import '../styles/loader.css';
import '../styles/fullPageLoader.css';

function FullPageLoader() {
  return (
    <div className="full-page-loader">
      <div className="loader-flex">
        <div className="ripple-loader">
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default FullPageLoader;
