import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import CarTypes from "../components/CarTypes.jsx";

const Home = () => {
  return (
    <div className="">
      <div className="home">
        <Header />
        <div className="image-container">
          <img src="/background.jpg" alt='' />
        </div>
      </div>
      <CarTypes />
      <Footer />
    </div>
  );
}

export default Home;
