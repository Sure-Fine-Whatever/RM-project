
import promptSync from 'prompt-sync';

async function prompt(){
    const userId = await promptSync();
    const prompt = userId;
    let newUserId = prompt('Enter character ID:');
    return(newUserId);
  }

  export{prompt};