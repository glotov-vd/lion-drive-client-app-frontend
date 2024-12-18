import Header from "../components/header/Header.jsx";

import CarSlide from "../components/car/CarSlide.jsx";
import {useState} from "react";
import {MenuItem, Select} from "@mui/material";
import InputLabel from '@mui/material/InputLabel';

const cars = [
  {id: '1', name: 'BMW X6M Competition', price: '45000', img: '/tmp/img_1.png', class: 'premium'},
  {id: '2', name: 'Audi A6', price: '30000', img: '/tmp/img_2.png', class: 'premium'},
  {id: '3', name: 'Mercedes S-Class', price: '55000', img: '/tmp/img_3.png', class: 'buiseness'},
];

const Cars = () => {
  const [classFilter, setClassFilter] = useState('all');

  const handleClassChange = (event) => {
    setClassFilter(event.target.value);
  };

  const filteredCars = cars.filter((car) => {
    if (classFilter === 'all') {
      return true;
    }
    return classFilter === car.class;
  });

  return (
    <div className="cars">
      <Header />

      <div className="cars-filters">
        <Select
          value={classFilter}
          onChange={handleClassChange}
          label="Класс"
        >
          <MenuItem value="all">Любой класс</MenuItem>
          <MenuItem value="off-road">Внедорожники</MenuItem>
          <MenuItem value="sportcar">Спорткары</MenuItem>
          <MenuItem value="premium">Премиум</MenuItem>
          <MenuItem value="buiseness">Бизнес</MenuItem>
          <MenuItem value="minivan">Минивэны</MenuItem>
          <MenuItem value="comfort">Комфорт</MenuItem>
          <MenuItem value="electric-car">Электромобили</MenuItem>
        </Select>
      </div>

      <div className="cars-gallery">
        {
          filteredCars.map((car) => (
            <CarSlide key={car.id} car={car}/>
          ))
        }
      </div>
    </div>
  );
}

export default Cars;