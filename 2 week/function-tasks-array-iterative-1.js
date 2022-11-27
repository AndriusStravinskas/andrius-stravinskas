const people = [
  {
    name: 'Jonas',
    surname: 'Jonaitis',
    sex: 'male',
    age: 26,
    income: 1200,
    married: false,
    hasCar: false
  },
  {
    name: 'Severija',
    surname: 'Piktutytė',
    sex: 'female',
    age: 26,
    income: 1300,
    married: false,
    hasCar: true
  },
  {
    name: 'Valdas',
    surname: 'Vilktorinas',
    sex: 'male',
    age: 16,
    income: 0,
    married: false,
    hasCar: false
  },
  {
    name: 'Virginijus',
    surname: 'Uostauskas',
    sex: 'male',
    age: 32,
    income: 2400,
    married: true,
    hasCar: true
  },
  {
    name: 'Samanta',
    surname: 'Uostauskienė',
    sex: 'female',
    age: 28,
    income: 1200,
    married: true,
    hasCar: true
  },
  {
    name: 'Janina',
    surname: 'Stalautinskienė',
    sex: 'female',
    age: 72,
    income: 364,
    married: false,
    hasCar: false
  }
];
console.groupCollapsed('1. Atspausdinkite visus žmones eilutėmis');
/*
  <name> <surname> - <sex> <age> <income> <married> <hasCar>
  pvz.: 
    Jonas Jonaitis - male 26 1200 false false

  <name> <surname>: is <sex> of age <age>. Earns <income> is <married> and <hasCar>;
  pvz.: 
    Jonas Jonaitis - is male of age 26. Earns 1200$ is not married has no car.
*/
{
  // ...sprendimas ir spausdinimas
  function peopleInRow(person) {

    console.log(`${person.name} ${person.surname}: is ${person.sex} of age ${person.age}. Earns ${person.income}$, Married: ${person.married}, Has car: ${person.hasCar};`)
  }

  people.forEach(peopleInRow)
}
console.groupEnd();

console.groupCollapsed('2. Atpausdinkite visus žmonių vardus ir pavardes, atskirtus brūkšneliu');
{
  // ...sprendimas ir spausdinimas
  function peopleInRow(person) {

    console.log(`${person.name} - ${person.surname}`)
  }

  people.forEach(peopleInRow)
}
console.groupEnd();

console.groupCollapsed('3. Atspausdinkite visų žmonių vardus ir pavardes bei santuokos statusą');
{
  // ...sprendimas ir spausdinimas
  function peopleInRow(person) {

    console.log(`${person.name} ${person.surname} Married: ${person.married}`)
  }

  people.forEach(peopleInRow)
}
console.groupEnd();

console.groupCollapsed('4. Sukurtite masyvą su lytimis ir uždirbamu pinigų kiekiu, pagal pradinį žmonių masyvą');
{
  // ...sprendimas ir spausdinimas
  function ArraypeopleWithSexAndIncome(person) {

    return `${person.sex}: ${person.income}$`
  }

  const peoplearraywithsexAndIncome = people.map(ArraypeopleWithSexAndIncome)

  console.log(peoplearraywithsexAndIncome)
}
console.groupEnd();

console.groupCollapsed('5. Sukurtite masyvą su vardais, pavardėmis ir lytimi, pagal pradinį žmonių masyvą');
{
  // ...sprendimas ir spausdinimas
  function GetNameSurnameAndSex(person) {
    
    return `${person.name} ${person.surname} is ${person.sex}`;
  };

  const fullnameAndSex = people.map(GetNameSurnameAndSex)

  console.table(fullnameAndSex)
  
}
console.groupEnd();

console.groupCollapsed('6. Atspausdinkite visus vyrus');
{
  // ...sprendimas ir spausdinimas
  function getAllWoman(person) {

    return person.sex === 'male';
  };

  const allMan = people.filter(getAllWoman);

  console.table(allMan)
}
console.groupEnd();

console.groupCollapsed('7. Atspausdinkite visas moteris');
{
  // ...sprendimas ir spausdinimas
  function getAllWoman(person) {

    return person.sex === 'female';
  };

  const allWoman = people.filter(getAllWoman);

  console.table(allWoman)
}
console.groupEnd();

console.groupCollapsed('8. Atspausdinkite žmonių vardus ir pavardes, kurie turi mašinas');
{
  // ...sprendimas ir spausdinimas
  function getFullNameFromPeopleWithCar(person) {
    
    if(person.hasCar)

      console.log(`${person.name} ${person.surname}`)
  };

 people.map(getFullNameFromPeopleWithCar);

}

console.groupEnd();

console.groupCollapsed('9. Atspausdinkite žmones kurie yra susituokę');
{
  // ...sprendimas ir spausdinimas
  function getPeopleIsMarried(person) {

      return person.married;
    };

   const marriedPerson = people.filter(getPeopleIsMarried);
    
    console.log(marriedPerson)
    
}
console.groupEnd();

console.groupCollapsed('10. Sukurkite objektą, kuriame būtų apskaičiuotas vairuojančių žmonių kiekis pagal lytį');
{
  // ...sprendimas ir spausdinimas
  const maleAgeAvg = people
    .filter(p => p.sex === 'male')
    .reduce((sum, p, _, arr) => sum + p.hasCar, 0);

    const femaleHasCar = people
    .filter(p => p.sex === 'female')
    .reduce((sum, p, _, arr) => sum + p.hasCar, 0);

  

  console.log(`Male: ${maleAgeAvg}`)
  console.log(`Female: ${femaleHasCar}`)
}
console.groupEnd();

console.groupCollapsed('11. Performuokite žmonių masyvą, jog kiekvieno žmogaus savybė "income", taptų "salary"');
{
  // ...sprendimas ir spausdinimas
  function changeIncomeToSalary({income, ...rest}) {
   
  
    return {
      salary: income,
      ...rest
    }
  }
;
  const changeToSalary = people.map(changeIncomeToSalary)
  console.log(changeToSalary);
  
}
console.groupEnd();

console.groupCollapsed('12. Suformuokite žmonių masyvą iš objektų, kuriuose nebūtų lyties, vardo ir pavardės');
{
  // ...sprendimas ir spausdinimas
  function ArrayWithoutSexNameAndSurname({sex, name, surname, ...rest}) {

    return {
      ...rest
    }
  }

  const deletedSexNameAndSurname = people.map(ArrayWithoutSexNameAndSurname)
  console.log(deletedSexNameAndSurname)
}
console.groupEnd();

console.groupCollapsed('13. Suformuokite žmonių masyvą  iš objektų, kuriuose "name" ir "surname" savybės, būtų pakeistos "fullname" savybe');
{
  // ...sprendimas ir spausdinimas
  function getFullName({name, surname, ...rest}){
    const fullname = `${name} ${surname}`;
    return{
      fullname,
      ...rest
    }
  };

  const fullName = people.map(getFullName);

  console.log(fullName);
}
console.groupEnd();

