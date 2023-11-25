import axios from 'axios';

const getMachineById = async (id) => {
  try {
    const result = await axios.get(`http://localhost:5000/master/machine/${id}`);
    return result.data.data;
  } catch (error) {
    return error;
  }
}

export default getMachineById;