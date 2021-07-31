import Hero from './hero-section';
import Posts from './posts';
import Tags from './tags';
import '../styles/home.css'

function Home() {
  return (
    <>
      <Hero />
      <div className="side-side-flex">
        <Posts />
        <Tags />
      </div>
    </>
  );
}

export default Home;
