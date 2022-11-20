console.groupCollapsed('1 - https://edabit.com/challenge/nuXdWHAoHv9y38sn7');
{
 
  function sortDrinkByPrice(drinks) {
    return drinks.sort((a, b) => a.price - b.price)
  }

  const drinks = [
    {name: 'lemonade', price: 90},
    {name: 'lime', price: 432},
    {name: 'peach', price: 23}
  ];

  

  console.log(sortDrinkByPrice(drinks))

}
console.groupEnd();

console.groupCollapsed('2 - https://edabit.com/challenge/9KEKJG5PZTFmG3Zau');
{
  {
  function addName(obj, name, value) {
  
    obj [name] = value;
    return obj;
  }
  
  
  console.log(addName({}, "Brutus", 300))
  console.log(addName({piano: 500}, "Brutus", 400))
  console.log(addName({ piano: 500, stereo: 300 }, "Caligula", 440))
  }
  {
    function addName(obj, name, value) {

      return {
        ...obj,
        [name]: value
      }
    }
    
    
    console.log(addName({}, "Brutus", 300))
    console.log(addName({piano: 500}, "Brutus", 400))
    console.log(addName({ piano: 500, stereo: 300 }, "Caligula", 440))
    
  }
}
console.groupEnd();

console.groupCollapsed('3 - https://edabit.com/challenge/48EJWLhF224na8po3');
{

  function generation(x, y) {
    if(x === -3 && y === 'm'){
      return 'great grandfather'
    } else if(x === -3 && y === 'f'){
      return 'great grandmother'
    } else if(x === -2 && y === 'm'){
      return 'grandfather'
    } else if(x === -2 && y === 'f'){
      return 'grandmother'
    } else if(x === -1 && y === 'm'){
      return 'father'
    } else if(x === -1 && y === 'f'){
      return 'mother'
    } else if(x === 0 &&  y === 'm'){
      return 'me!'
    } else if(x === 0 && y === 'f' ){
      return 'me!'
    } else if(x === 1 && y === 'm'){
      return 'son'
    } else if(x === 1 && y === 'f'){
      return 'daughter'
    } else if(x === 2 && y === 'm'){
      return 'grandson'
    } else if(x === 2 && y === 'f'){
      return 'granddaughter'
    } else if(x === 3 && y === 'm'){
      return 'great grandson'
    } else if(x === 3 && y === 'f'){
      return 'great granddaughter'
    } 
  }
  
  
  
  console.log(generation(-3, "m"));
  console.log(generation(1, "f"));
  console.log(generation(-3, "f"));
  console.log(generation(-2, "m"));
  console.log(generation(-2, "f"));
  console.log(generation(-1, "m"));
  console.log(generation(-1, "f"));
  console.log(generation(0, "f"));
  console.log(generation(1, "m"));
  console.log(generation(1, "f"));
  console.log(generation(2, "m"));
  console.log(generation(2, "f"));
  console.log(generation(3, "m"));
  console.log(generation(3, "f"));
  console.log(generation(0, "m"));

}
console.groupEnd();

console.groupCollapsed('4 - https://edabit.com/challenge/i6YqzHcSiPiEQKjeX');
{
  function maximumScore(tiles) {
    let sum = 0;
  
    for (let i = 0; i < tiles.length; i += 1) {
      const tile = tiles[i];
  
      sum += tile.score;
    }
  
    return sum;
  }
  
  const tiles = [
    { tile: "N", score: 1 },
    { tile: "K", score: 5 },
    { tile: "Z", score: 10 },
    { tile: "X", score: 8 },
    { tile: "D", score: 2 },
    { tile: "A", score: 1 },
    { tile: "E", score: 1 }
  ];
  
  const result = maximumScore(tiles);
  
  console.log(result);
}
console.groupEnd();

console.groupCollapsed('5 - https://edabit.com/challenge/8s2jy9hR2TAeQinKD');
{
  function calculateDifference(obj, limit) {
  
    let value = (Object.values(obj).reduce(
      (firstThing, secondThing) => firstThing + secondThing)) - limit;
  
      return value;
  }
  
  const obj = calculateDifference({ skate: 10, painting: 20 }, 19);
  const obj2 = calculateDifference({ "baseball bat": 31}, 10);
  
  
  console.log(calculateDifference({ "baseball bat": 20 }, 5));
  console.log(obj);
  console.log(calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400));
  console.log(obj2)
}
console.groupEnd();

console.groupCollapsed('6 - https://edabit.com/challenge/pPNAs5PvB3WvnDwDM');
{
  function toArray(obj) {
    const result = [];
    let i = 0;
    for (const key in obj) {
      result[i] = [key, obj[key]];
      i += 1;
    }
  
    return result;
  }
  
  // function toArray(obj) {
  //   return Object.entries(obj);
  // }
  
  const arr1 = toArray({ a: 1, b: 2, c: 6 });
  const arr2 = toArray({ shrimp: 15, tots: 122});
  
  console.log(arr1);
  console.log(arr2);
  
}
console.groupEnd();

console.groupCollapsed('7 - https://edabit.com/challenge/QXWM2oo7rQNiyDsip');
{
  function inkLevels(inks) {

    return Math.min(...Object.values(inks))
  }
  const inkLevels1 = {
    "cyan": 23,
    "magenta": 12,
    "yellow": 10
  }
  
  console.log(inkLevels(inkLevels1))
}
console.groupEnd();

console.groupCollapsed('8 - https://edabit.com/challenge/pLNavsePxJ87t9Nak');
{
  function calculateLosses(obj) {
  
    if (Object.keys(obj).length === 0) return "Lucky you!";
  
    let value = (Object.values(obj).reduce(
      (firstThing, secondThing) => firstThing + secondThing));
      
      return value;
  }
  
  const stolenItems = {
    tv: 30,
    skate: 20,
    stereo: 50,
    painting: 20000,
  }
  
  const stolenItemsLU = {}
  
  
  console.log(calculateLosses(stolenItems));
  console.log(calculateLosses(stolenItemsLU));
}
console.groupEnd();
