import axios from 'axios';
import { printError } from './printer.util.js';
import config from './config.json' assert {type:'json'};


async function getByUserId(userId) {
     //return await axios.get(`https://rickandmortyapi.com/api/character/${userId}`)
     return await axios.get(config.baseUrl + `/${userId}`)
    .then((response) => {
     /*  const name = response.data.name;
      const status = response.data.status;
      const species = response.data.species;
      const id = response.data.id;
      console.log(response.data); */
      return response.data;
    })
    .catch((error) => printError(error.response.data.error));
 
}

export { getByUserId };