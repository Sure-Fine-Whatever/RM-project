import Printer from './printer.util.js';
import RunApp from './check.uti.js';

const runapp = new RunApp();

export default class MyApp{
  async rmApplication(id) {
    const info = await runapp.runApp(id);
    Printer.printInfo(info);
  }
}

