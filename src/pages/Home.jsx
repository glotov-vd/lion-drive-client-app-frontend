import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

const Home = () => {
  return (
    <div className="">
      <div className="home">
        <Header />
        <div className="image-container">
          <img src="/background.jpg" alt='' />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;