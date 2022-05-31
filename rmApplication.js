import { printInfo } from './printer.util.js';
import { runApp } from './check.uti.js';

async function rmApplication() {
  printInfo(await runApp());

}

rmApplication();