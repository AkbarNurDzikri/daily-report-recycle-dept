import axios from 'axios';

const getMesinById = async (id) => {
  try {
    const result = await axios.get(`http://localhost:5000/master/mesin/${id}`);
    return result.data.data;
  } catch (error) {
    return error;
  }
}

export default getMesinById;