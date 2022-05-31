    function encrypt(race){
      let newSpecies = race.replace(/\w+/gi, 'Classified');
      let newName = 'Bobobo';
    return  [newName,newSpecies];
    
}  

export{encrypt};