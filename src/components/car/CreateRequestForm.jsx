import {TextField} from "@mui/material";
import {useState} from "react";
import {createOrder} from "../../services/orderService.js";

const CreateRequestForm = ({carName}) => {

  const [formData, setFormData] = useState({
    renterName: '',
    phone: '',
    date: '',
    comment: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Обработчик отправки формы
  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestData = {
      ...formData,
      carName
    };

    console.log('=== CREATE ORDER REQUEST:', requestData);

    try {
      const result = await createOrder(requestData); // Используем сервис для отправки данных
      console.log('Запрос успешно отправлен:', result);
      // Логика после успешной отправки (например, очистка формы)
    } catch (error) {
      console.error('Ошибка при отправке:', error);
      // Логика обработки ошибок
    }
  };

  return (
    <div className="form-request">
      <div className="form-request__content">
        <div className="form-request__title">
          <h2>Забронируйте {carName} в компании Lion Drive</h2>
          <p>* после направления заявки менеджер свяжется с вами в течении часа</p>
        </div>

        <div className="form-request__form">
          <form onSubmit={handleSubmit}>
            <TextField
              type="text"
              name="renterName"
              variant="standard"
              label="ваше имя"
              value={formData.renterName}
              onChange={handleChange}
            />
            <TextField
              type="tel"
              name="phone"
              variant="standard"
              label="Номер телефона"
              value={formData.phone}
              onChange={handleChange}
            />
            <TextField
              type="date"
              name="date"
              variant="standard"
              slotProps={{ inputLabel: { shrink: true } }}
              label="дата начала аренды"
              value={formData.date}
              onChange={handleChange}
            />
            <TextField
              type="text"
              name="comment"
              variant="standard"
              label="комментарий (не обязательно)"
              value={formData.comment}
              onChange={handleChange}
            />

            <button type="submit">забронировать</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateRequestForm;