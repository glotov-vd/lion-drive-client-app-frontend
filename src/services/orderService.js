import axios from 'axios';

const API_BASE_URL = 'http://193.124.203.191:7900/api/orders';

export const createOrder = async (orderData) => {
  try {
    console.log('=== ORDER RESPONSE:', orderData);
    const response = await axios.post(API_BASE_URL, orderData, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    return await response.json();
  } catch (error) {
    console.error('Ошибка при запросе:', error);
  }
}

