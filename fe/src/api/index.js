import axios from 'axios';

export const getData = async (type, input) => {
  let response = {};
  try {
    response = await axios.post(`http://localhost:4000/${type}`, input);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
  }

  return response.data;
};
