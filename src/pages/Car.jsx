import * as React from 'react';
import Header from "../components/header/Header.jsx";
import Slider from "../components/car/Slider.jsx";
import {Breadcrumbs, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import Tarifs from "../components/car/Tarifs.jsx";
import RentCondition from "../components/car/RentCondition.jsx";
import {aboutRentInfo} from "../consts/aboutRentInfo.js";
import {useEffect, useState} from "react";
import axios from "axios";
import CreateRequestForm from "../components/car/CreateRequestForm.jsx";

const carInfo = {
  id: 'asda212-asdasd-123-sad-123211',
  name: "Mercedes-Benz AMG GT 63s",
  info: {
    class: 'купе',
    engine_power: 639,
    acceleration: 3.5,
    drive: 'Полный',
    seats_number: 5
  }
}

const Car = () => {
  // const [carInfo, setCarInfo] = useState(null);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchCarInfo = async () => {
  //     try {
  //       const data = await fetchCarInfo('mercedes-benz-amg-gt63s')
  //       console.log('==== SEND REQUEST ====');
  //       setCarInfo(data); // Сохраняем полученные данные в состоянии
  //     } catch (error) {
  //       console.error("Ошибка при загрузке данных об автомобиле:", error);
  //     } finally {
  //       setLoading(false); // Убираем индикатор загрузки после запроса
  //     }
  //   }
  //
  //   fetchCarInfo();
  // }, []);

  // if (loading) {
  //   return <div>Загрузка...</div>
  // }
  //
  // if (!carInfo) {
  //   return <div>Не удалось загрузить информацию об автомобиле.</div>;
  // }

  // ==== CAR TARIFS ====
  const carTarifs = {
    carName: "Mercedes-Benz AMG GT 63s",
    tarifs: [
      { daysRange: "1-7 суток", price: "55 000 ₽", negotiable: false },
      { daysRange: "7-14 суток", price: "50 000 ₽", negotiable: false },
      { daysRange: "от 14 суток", price: "", negotiable: true },
      { daysRange: "страховой взнос", price: "100 000 ₽", negotiable: false }
    ]
  };

  return (
    <div className="car">
      <Header/>

      <div className="car__slider-container">
        <Slider carInfo={carInfo}/>
      </div>

      <div className="car__breadcrumb-container">
        <Breadcrumbs className="car__breadcrumb">
          <Link to="/">Главная</Link>
          <Link to="/cars">Каталог автомобилей</Link>
          <Link to={`/cars?filter=${carInfo.info.class}`}>{carInfo.info.class}</Link>
          <Typography>Mercedes-Benz AMG GT 63s</Typography>
        </Breadcrumbs>
      </div>

      <div className="car__tarifs-container">
        <Tarifs tarifs={carTarifs} />
      </div>

      <div className="car__about-rent">
        {aboutRentInfo.map((info) => (
          <div key={info.id} className="car__about-rent__info">
            {info.text}
          </div>
        ))}
      </div>

      <div className="car__rent-condition-container">
        <RentCondition />
      </div>

      <div className="car__create-request-container">
        <CreateRequestForm carName={carInfo.name}/>
      </div>
    </div>
  );
}

export default Car;