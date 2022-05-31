import axios from 'axios';
import config from './config.json' assert {type:'json'};

async function getCount() {
  const res = await axios.get(config.baseUrl);
  return res.data.info.count;

}

async function randomId() {
  let id = Math.ceil(Math.random() * await getCount());
  return id;

}

export { randomId };