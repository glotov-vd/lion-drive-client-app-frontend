import axios from 'axios';

const API_BASE_URL = 'http://193.124.203.191:7900/api/cars';

export const fetchCarInfo = async (carName) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/${carName}`);
    return response.data;
  } catch (error) {
    console.error("Ошибка при получении данных об автомобиле:", error);
    throw error;
  }
}

