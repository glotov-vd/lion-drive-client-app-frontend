const Services = () => {

  const services = [
    {
      text: 'Доставка авто',
      price: 'от 3.000 ₽',
      img: '/services/car_delivery.png'
    },
    {
      text: 'Личный водитель',
      price: 'от 1.500 ₽ / час',
      img: '/services/car_delivery.png'
    },
    {
      text: '100% защита',
      price: 'ответственность 0 руб.',
      img: '/services/car_delivery.png'
    },
    {
      text: 'Детское кресло',
      price: 'бесплатно',
      img: '/services/car_delivery.png'
    },
    {
      text: 'Охрана',
      price: 'индивидуально',
      img: '/services/car_delivery.png'
    },
    {
      text: 'Фотограф',
      price: 'от 5.000 ₽ / час',
      img: '/services/car_delivery.png'
    },
  ];

  return (
    <>

      Услуги

      {
        services.map((service, i) => (
          <div key={i} style={{background: '#828282'}}>
            <span>{service.text}</span>
            <span>{service.price}</span>
          </div>
        ))
      }

    </>
  );
}

export default Services;