import axios from 'axios';

const API_URL = `${process.env.REACT_APP_API_URL}/api`;

export const submitContactForm = async (formData) => {
  try {
    const response = await axios.post(`${API_URL}/contact`, formData);
    return response.data;
  } catch (error) {
    throw new Error('Error sending message');
  }
};
