import * as fs from 'fs';
import config from '../config.js';
import dateFormat, { masks } from "dateformat";

const now = new Date();

export default class Writer{
  async writer(id){
    fs.appendFile(
    config.fileName,
    `${await dateFormat(now,"mm/dd/yyyy h:MM TT")}: info about alian ${id} successfully hidden. \r\n`,
    'utf8',
    (err) => {
      if (err) throw err;
    } 
  );
}; 

}
