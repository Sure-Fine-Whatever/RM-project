   //import {devName} from '../data/testData.js';
   import TestData from '../data/testData.js';
   const testdata = new TestData();

   export default class Encrypt {
      encrypt(race){
         let newSpecies = race.replace(/\w+/gi, 'Classified');
         let newName = testdata.devName;
       return  [newName,newSpecies];
       
   }  

   }
