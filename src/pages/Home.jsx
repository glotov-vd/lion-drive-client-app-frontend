import Header from "../components/header/Header.jsx";

const Home = () => {
  return (
    <div className="home">
      <Header/>
      <div className="image-container">
        <img src="/background.jpg" alt=''/>
      </div>
    </div>
  );
}

export default Home;