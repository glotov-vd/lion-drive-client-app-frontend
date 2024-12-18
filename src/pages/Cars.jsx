import Header from "../components/header/Header.jsx";

import CarSlide from "../components/car/CarSlide.jsx";
import {useState} from "react";
import {MenuItem, Select} from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import {Link, useLocation} from "react-router-dom";

const Cars = () => {
  const location = useLocation();

  const cars = [
    {id: '1', name: 'Lamborghini Urus', price: '70000', img: '/tmp/img_1.png', class: 'off-road'},
    {id: '2', name: 'Mercedes G-class AMG 63 Grey', price: '70000', img: '/tmp/img_2.png', class: 'off-road'},
    {id: '3', name: 'Mercedes AMG GT 63s', price: '45000', img: '/tmp/img_3.png', class: 'coupe'},
    {id: '4', name: 'Tesla Model X Performance Ludicrous', price: '40000', img: '/tmp/img_4.png', class: 'electric'},
    {id: '5', name: 'Zeekr 001 Z-Sport', price: '25000', img: '/tmp/img_5.png', class: 'electric'},
    {id: '6', name: 'Lixiang Li Auto L9', price: '23000', img: '/tmp/img_6.png', class: 'electric'},
    {id: '7', name: 'Hiphi Z', price: '35000', img: '/tmp/img_7.png', class: 'electric'},
  ];

  const [isSortedByPrice, setIsSortedByPrice] = useState(false);

  const handleSortByPrice = () => {
    setIsSortedByPrice(!isSortedByPrice);
  };

  const filteredCars = cars.filter(car => {
    if (location.pathname === '/cars/electric') {
      return car.class === 'electric';
    }
    if (location.pathname === '/cars/off-road') {
      return car.class === 'off-road';
    }
    if (location.pathname === '/cars/coupe') {
      return car.class === 'coupe';
    }
    if (location.pathname === '/cars/sport-cars') {
      return car.class === 'sport-cars';
    }
    if (location.pathname === '/cars/cabriolet') {
      return car.class === 'cabriolet';
    }
    if (location.pathname === '/cars/premium') {
      return car.class === 'premium';
    }

    if (location.pathname === '/cars') {
      return true;
    }

    return false;
  });

  const getHeadingText = () => {
    if (location.pathname === '/cars/electric') {
      return "Автопарк электрокаров Lion Drive";
    }
    if (location.pathname === '/cars/off-road') {
      return "Автопарк внедорожников Lion Drive";
    }
    if (location.pathname === '/cars/coupe') {
      return "Автопарк купе Lion Drive";
    }
    if (location.pathname === '/cars/sport-cars') {
      return "Автопарк спортивных машин Lion Drive";
    }
    if (location.pathname === '/cars/cabriolet') {
      return "Автопарк кабриолетов Lion Drive";
    }
    if (location.pathname === '/cars/premium') {
      return "Автопарк класса премиум Lion Drive";
    }
    return "Автопарк Lion Drive";
  };

  return (
    <div className="cars">
      <Header />

      <div className="back__image">
        <img src="/background_2.png"/>
        <h3>{getHeadingText()}</h3>
      </div>

      <div className="cars__filters">
      </div>

      <div className="cars__gallery">
        {filteredCars.map((car, index) => (
          <CarSlide key={index} car={car} />
        ))}
      </div>
    </div>
  );
}

export default Cars;