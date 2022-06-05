import axios from 'axios';
import config from '../config.js';

export default class Api{
  async  getCount() {
    const res = await axios.get(config.baseUrl);
    return res.data.info.count;
  
  }
  
  async  getByUserId(userId) {
    const res = await axios.get(`${config.baseUrl }/${userId}`);
    return res.data;
   
  }
}
