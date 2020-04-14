import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:9000',
  withCredentials: false,
  // headers: {
  //   "Access-Control-Allow-Headers":"X-Requested-With,Content-Type",
  //   'Access-Control-Allow-Origin': '*',
  //   "Access-Control-Allow-Methods":"PUT,POST,GET,DELETE,OPTIONS"
  // }
});
