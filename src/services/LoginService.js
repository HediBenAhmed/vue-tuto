import axios from 'axios';

export default {

  login: (login, password) => axios.post('/auth/login', {
    login,
    password,
  })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    }),
  getCurrentUser: () => axios.get('auth/current')
    .then((response) => {
      console.log(response.data);
      return response.data;
    }),
};
