import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

import Card from '@mui/material/Card';
import {CardContent} from "@mui/material";

const cars = [
  {id: '1', text: 'Название авто', img: 'Изображение'},
  {id: '2', text: 'Название авто', img: 'Изображение'},
  {id: '3', text: 'Название авто', img: 'Изображение'},
  {id: '4', text: 'Название авто', img: 'Изображение'},
  {id: '5', text: 'Название авто', img: 'Изображение'},
];

const Cars = () => {
  return (
    <div className="cars">
      <Header />

      <div className="cars-items">
        {
          cars.map((car, i) => (
            <Card key={i} sx={{ maxWidth: 300, margin: 1 }}>
              <CardContent>
                <h3>{car.text}</h3>
              </CardContent>
            </Card>
          ))
        }
      </div>

      <Footer />
    </div>
  );
}

export default Cars;