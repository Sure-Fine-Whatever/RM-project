import {getDateTime} from './datetime.util.js';
import * as fs from 'fs';


 async function writer(id){
    fs.appendFile(
    'result.txt',
    `${await getDateTime()}: info about alian ${id} successfully hidden. \r\n`,
    'utf8',
    (err) => {
      if (err) throw err;
  
    
    } 
  );
}; 

export{writer};