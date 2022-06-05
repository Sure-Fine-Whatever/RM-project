import MyApp from "./utils/rmApplication.js";
import TestData from './data/testData.js';
const testdata = new TestData();

const classApplication = new MyApp();
classApplication.rmApplication(testdata.userId);
