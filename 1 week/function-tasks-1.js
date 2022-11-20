console.groupCollapsed('1. Parašykite funkciją, kuri grąžina pirmą masyvo elementą.');
{
  // ...sprendimas ir spausdinimas
  function returnArray(arr) {

    return arr[0]
  }

  const arr = ["Banana", "Orange", "Apple", "Mango"];
  //              0         1         2       3 

  console.log(returnArray(arr))

}
console.groupEnd();

console.groupCollapsed('2. Parašykite funkciją, kuri pašalina pirmą masyvo elementą ir jį grąžina.');
{
  // ...sprendimas ir spausdinimas
  function deleteFirstArrayWhenReturn(arr) {

   arr.shift(arr);

   return arr

  }

  const arr = ["Banana", "Orange", "Apple", "Mango"];

  console.log(deleteFirstArrayWhenReturn(arr))
}
console.groupEnd();

console.groupCollapsed('3. Parašykite funkciją, kuri grąžina paskutinį masyvo elementą.');
{
  // ...sprendimas ir spausdinimas
  function returnLastArrayItems(arr) {

    return arr.slice(-1)
  }

  
  const arr = ["Banana", "Orange", "Apple", "Mango"];

  console.log(returnLastArrayItems(arr))
}
console.groupEnd();

console.groupCollapsed('4. Parašykite funkciją, kuri pašalina paskutinį masyvo elementą ir jį grąžina.');
{
  // ...sprendimas ir spausdinimas
  function deleteLastArrayItemsAndReturn(arr) {

    arr.pop()

     return arr
  }

  
  const arr = ["Banana", "Orange", "Apple", "Mango"];

  console.log(deleteLastArrayItemsAndReturn(arr)) 
}
console.groupEnd();

console.groupCollapsed('5. Parašykite funkciją, kuri grąžina elementų kiekį masyve');
{
  // ...sprendimas ir spausdinimas
  function returnElementAmountInArray(arr){

    return arr.length;
  }

  const arr = ["Banana", "Orange", "Apple", "Mango"];

  console.log(returnElementAmountInArray(arr)) 
}
console.groupEnd();

console.groupCollapsed('6. Parašykite funkciją, kuri atspausdina paskutinio masyvo elemento indeksą');
{
  // ...sprendimas ir spausdinimas
  function printLastArrayItem(arr){
    const arr1 = Object.keys(arr)
    const result = arr1.slice(-1);

    console.log(result)
      
  }


  const arr = ["Banana", "Orange", "Apple", "Mango"];

  printLastArrayItem(arr)
}
console.groupEnd();

console.groupCollapsed('7. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus eilutėmis');
{
  {
  // 1) sprendimas ir spausdinimas
    function printAllArrayInIndexinMultipleLines(arr){
    const arr1 = Object.keys(arr)
    const result = arr1.join('\n')

    console.log(result);
    }

    const arr = ["Banana", "Orange", "Apple", "Mango"];

    printAllArrayInIndexinMultipleLines(arr)
  }
  {
    // 2) sprendimas ir spausdinimas
    function printAllArrayInIndexinMultipleLines(arr){
      const arr1 = Object.keys(arr)
      arr1.forEach(result => {
        console.log(result);
      });
      }
    const arr = ["Banana", "Orange", "Apple", "Mango"];
    
    printAllArrayInIndexinMultipleLines(arr)
 
  }
}
console.groupEnd();

console.groupCollapsed('8. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes eilutėmis');
{
  // 2) sprendimas ir spausdinimas
  function printAllArrayInMultipleLines(arr){
    
    arr.forEach(result => {
      console.log(result);
    });
    }
  const arr = ["Banana", "Orange", "Apple", "Mango"];
  
  printAllArrayInMultipleLines(arr)

  
}
console.groupEnd();

console.groupCollapsed('9. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras eilutėmis, tokiu formatu:  ');
// [0] => reikšmė
// [1] => reikšmė
// [2] => reikšmė
{
  // ... sprendimas ir spausdinimas
  function printAllArrayAndIndexInMultipleLines(arr){

   arr.map((currElement, index) => {
      console.log('[' + index + ']' + " " + "=>" + " " + currElement)
    });

  } 
    
  const arr = ["Banana", "Orange", "Apple", "Mango"];
  
  printAllArrayAndIndexInMultipleLines(arr)
}
console.groupEnd();

console.groupCollapsed('10. Parašykite funkciją, kuri atspausdina masyvo elementus atbuline tvarka eilutėmis, iš galo.');
{
  // ...sprendimas ir spausdinimas
  function printAllArrayInReverseOrderAndMultipleLines(arr){
    let arr1 = arr.reverse();
    arr1.forEach(result => {
      console.log([result]);
    });

  }
  
  const arr = ["Banana", "Orange", "Apple", "Mango"];
  
  printAllArrayInReverseOrderAndMultipleLines(arr)

}
console.groupEnd();

console.groupCollapsed('11. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus vienoje eilutėje: 0 1 2 3 ...');
{
  // ...sprendimas ir spausdinimas
  function printArrayIndexInRow(arr){
 

   const result = arr.map((item, index) => index);

   console.log(result.join(" "))
 
   } 
     
   const arr = ["Banana", "Orange", "Apple", "Mango"];
   
   printArrayIndexInRow(arr)
 
}
console.groupEnd();

console.groupCollapsed('12. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes vienoje eilutėje: -111 2 -9 48');
{
  // ...sprendimas ir spausdinimas
  function printArrayInRow(arr){
 

    const result = arr.map((item, index) => item);
 
    console.log(result.join(" "))
  
    } 
      
    const arr = ["Banana", "Orange", "Apple", "Mango"];
    
    printArrayInRow(arr)
}
console.groupEnd();

console.groupCollapsed('13. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras vienoje eilutėje, tokiu formatu:');
//  [0]=>17 [1]=>8 [2]=>88 ..
{
  // ...sprendimas ir spausdinimas
  function printArrayIndexAndElementInRow(arr){
 

   const result = arr.map((items,index) => ('[' + index + ']' +  "=>" + items));
  
    console.log(result.join(" "))
    };
 
    
    
      
    const arr = ["Banana", "Orange", "Apple", "Mango", 100, -5023];
    
    printArrayIndexAndElementInRow(arr)
}
console.groupEnd();
