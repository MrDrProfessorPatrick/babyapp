const axios = require('axios');

export function fetchGoodsList() {
  return axios.get('http://localhost:5000/getcategorieslist');
}
