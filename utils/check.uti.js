import Random from './random.util.js';
import Encrypt from './encrypt.js';
import Writer from './writer.js';
import Api from './api.util.js';
import TestData from '../data/testData.js';

const encryData = new Encrypt();
const writerData = new Writer();
const apiData = new Api();
const testdata = new TestData();


export default class RunApp{
    async runApp(id) {
        let user;
        if (id === '') {
            const maxUserCount = await apiData.getCount();
            const randomUserId = Random.randomId(1,maxUserCount);
            user = await apiData.getByUserId(randomUserId);
        }
        else {
            user = await apiData.getByUserId(id);
        }
        if (user.species !== testdata.human) {
            writerData.writer(user.id);
            const [newName, newSpecies] = encryData.encrypt(user.species);
            user.species = newSpecies;
            user.name = newName;
        
    
        }
        return `${user.name}, ${user.status}, ${user.species}`;
    }
    
}
