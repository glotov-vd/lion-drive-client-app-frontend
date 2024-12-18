import Header from "../components/header/Header.jsx";
import CarSlide from "../components/car/CarSlide.jsx";

const Home = () => {
  const cars = [
    {id: '1', name: 'Lamborghini Urus', price: '70000', img: '/tmp/img_1.png', class: 'off-road'},
    {id: '2', name: 'Mercedes G-class AMG 63 Grey', price: '70000', img: '/tmp/img_2.png', class: 'off-road'},
    {id: '3', name: 'Mercedes AMG GT 63s', price: '45000', img: '/tmp/img_3.png', class: 'coupe'},
    {id: '4', name: 'Tesla Model X Performance Ludicrous', price: '40000', img: '/tmp/img_4.png', class: 'electric'},
    {id: '5', name: 'Zeekr 001 Z-Sport', price: '25000', img: '/tmp/img_5.png', class: 'electric'},
    {id: '6', name: 'Lixiang Li Auto L9', price: '23000', img: '/tmp/img_6.png', class: 'electric'},
    {id: '7', name: 'Hiphi Z', price: '35000', img: '/tmp/img_7.png', class: 'electric'},
  ];

  return (
    <div className="home">
      <Header/>
      <div className="image-container">
        <img src="/background.jpg" alt=''/>
      </div>
      <div className="home__title">
        <h3>Аренда автомобилей класса премиум в Санкт-Петербурге</h3>
      </div>
      <div className="cars__gallery">
        {cars.map((car, index) => (
          <CarSlide key={index} car={car}/>
        ))}
      </div>
    </div>
  );
}

export default Home;