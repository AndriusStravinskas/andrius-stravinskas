// ----------------------Užduotys--------------------------
const numbers = [1, 2, -2, 6, -5, 9, 1.02, 45, -69, 77, -12, 2, 8, -2, -4, 59, 7, -3];

console.group('1. Padauginti masyvo narius iš 2 ir išsaugoti naujame masyve');
console.log('---');
{
  function mulArrBy2(arr) {
    // ... code
    return arr * 2;
  }

  const double = numbers.map(mulArrBy2)
  console.log({
    numbers,
    result: double
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('2. Pakelti masyvo narius kvadratu ir išsaugoti naujame masyve');
console.log('---');
{
  function powerArrBy2(arr) {
    // ... code
    return arr ** 2;
  }

  let power = numbers.map(powerArrBy2)
  console.log({
    numbers,
    result: power
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('3. Padauginti masyvo narius iš jų index\'o (vietos masyve) ir išsaugoti naujame masyve');
console.log('---');
{
  function mulArrElementsByIndex(arr, index) {
    // ... code
    return arr * index;
  }

  let double = numbers.map(mulArrElementsByIndex)
  console.log({
    numbers,
    result: double
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('4. Atrinkti tiktai teigimų elementų masyvą');
console.log('---');
{
  function filterPositives(arr) {
    // Jūsų kodas
    return arr > 0;
  }

  const positiveNumber = numbers.filter(filterPositives)
  console.log({
    numbers,
    result: positiveNumber
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('5. Atrinkti tiktai neigiamų elementų masyvą');
console.log('---');
{
  function filterNegatives(arr) {
    // Jūsų kodas
    return arr < 0;
  }

  let negativeNumber = numbers.filter(filterNegatives)
  console.log({
    numbers,
    result: negativeNumber
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('6. Atrinkti tiktai lyginių skaičių masyvą');
console.log('---');
{
  function filterEquals(arr) {
    // Jūsų kodas
    return arr % 2 === 0;
  }

  let equalsNumber = numbers.filter(filterEquals)
  console.log({
    numbers,
    result: equalsNumber
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('7. Atrinkti tiktai nelyginių skaičių masyvą');
console.log('---');
{
  function filterOdds(arr) {
    // Jūsų kodas
    return arr % 2 === 1 || arr % 2 === -1;
  }

  let oddsNumber = numbers.filter(filterOdds)
  console.log({
    numbers,
    result: oddsNumber
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group("8. Visas neigiamas vertes masyve padaryti teigiamomis ir išsaugoti į naują masyvą");
{

  function arrAbsoluteValues(arr) {
  
  const positiveNumber = numbers.reduce((accumulator, currentValue) => {
    // ... code
    if(currentValue > 0) {
      
      return [...accumulator, currentValue];
    } else if( currentValue < 0) {
      const turnPostive = currentValue * -1;
      return [...accumulator, turnPostive]
    }
    return accumulator
  }, []);

  arr = positiveNumber

  return arr;

}

  console.log('---');
  console.log({
    numbers,
    result: arrAbsoluteValues(numbers)
  });

}
  console.log('---');
console.groupEnd();
console.log();

console.group('9. Pakelti visas masyvo reikšmes laipsniu \'index\' ir išsaugoti naujame masyve');
console.log('---');
{
  function powArrElementsByIndex(arr, index) {
    // Jūsų kodas
    return arr ** index;
  }

  let power = numbers.map(powArrElementsByIndex)
  console.log({
    numbers,
    result: power
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('10. Atrinkti tik natūralių skaičių masyvą');
console.log('---');
{
  function filterNaturals(arr) {
    // Jūsų kodas
    
     if(arr > 0 && arr % 2 === 0 || arr % 2 === 1) {
    
      return arr
     }
  }

  const natural = numbers.filter(filterNaturals)
  console.log({
    numbers,
    result: natural
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('11. Suapvalinti visas masyvo reikšmes iki sveikų skaičių ir išsaugoti naujame masyve');
console.log('---');
{
  function absArrElements(arr) {
    // Jūsų kodas
    liekana = arr % 1; 

    return arr - liekana
  }

  const absolute = numbers.map(absArrElements)
  console.log({
    numbers,
    result: absolute
  });
}
console.log('---');
console.groupEnd()

console.group('12. Atrinkti kas antrą elementą');
console.log('---');
{
  function filterEverySecond(arr, index) {
    //  Jūsų kodas
    return index % 2 === 0;
  }

  const element = numbers.filter(filterEverySecond)
  console.log({
    numbers,
    result: element
  });
}
console.log('---');
console.groupEnd();

console.group('13. Atrinkti kas penktą elementą');
console.log('---');
{
  function filterEveryFifth(arr, index) {
    //  Jūsų kodas
    return index % 5 === 0;
  }
  const element = numbers.filter(filterEveryFifth)
  console.log({
    numbers,
    result: element
  });
}
console.log('---');
console.groupEnd();


console.group('14. Sukurti funkciją, kuri ima masyvą ir atspausdina kiekvieną jo reikšmę atskirai: [0] => 64. (nieko negrąžina)');
console.log('---');
{
  function printArr(arr, index) {
    // ... code
    console.log(`[${index}] => ${arr}`)
  }
  numbers.forEach(printArr);
}
console.log('---');
console.groupEnd();

console.group('15. Sukurti funkciją, kuri ima masyvą ir grąžina visų elementų sumą');
console.log('---');
{
  function sumArr(prevValue, element, i) {
    // Jūsų kodas
    
    return prevValue + element
  }

  const sumnumber = numbers.reduce(sumArr)
  console.log({
    numbers,
    result: sumnumber
  });
}
console.log('---');
console.groupEnd()

console.group('16. Sukurti funkciją, kuri ima masyvą ir grąžina visų elementų vidurkį');
console.log('---');
{
  function avgArr(previousValue, currentValue, currentIndex, {length}) {
    // Jūsų kodas
    return previousValue + currentValue / length;
  }

  const avg = numbers.reduce(avgArr)
  console.log({
    numbers,
    result: avg
  });
}
console.log('---');
console.groupEnd()

console.group('17. Sukurti funkciją, kuri ima masyvą ir grąžina didžiausią skaičių masyve.');
console.log('---');
{
  function arrMax(previousValue, currentValue) {
    //  Jūsų kodas

    return (previousValue > currentValue) ? previousValue : currentValue;

  }
  const max = numbers.reduce(arrMax)
  console.log({
    numbers,
    result: max
  });
}
console.log('---');
console.groupEnd()

console.group('18. Sukurti funkciją, kuri ima masyvą ir grąžina mažiausią skaičių masyve.');
console.log('---');
{
  function arrMin(previousValue, currentValue) {
    //  Jūsų kodas
    return (previousValue < currentValue) ? previousValue : currentValue;

  }
  const min = numbers.reduce(arrMin)
  console.log({
    numbers,
    result: min
  });
}
console.log('---');
console.groupEnd();
