import { getByUserId } from './rmAPI.js';
import { encrypt } from './encrypt.js';
import { prompt } from './prompt.util.js';
import { randomId } from './random.util.js';
import { writer } from './writer.js';

async function runApp() {
    const userId = await prompt();
    const user = userId === '' ? await getByUserId(await randomId()) : await getByUserId(userId);
    if (user.species !== 'Human') {
        writer(user.id);
        const [newName,newSpecies] = encrypt(user.species);
        user.species = newSpecies;
        user.name = newName;

    }
    return  `${user.name}, ${user.status}, ${user.species}`;
}

export { runApp };














