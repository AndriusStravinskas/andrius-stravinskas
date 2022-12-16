const peopledata = [
  {
    name: "Serbentautas",
    surname: "Bordiūras",
    age: 18,
    height: 186,
    weight: 83,
    sex: "male",
  },
  {
    name: "Joburė",
    surname: "Vaitkutytė",
    age: 68,
    height: 176,
    weight: 100,
    sex: "female",
  },
  {
    name: "Verlas",
    surname: "Gudrioras",
    age: 23,
    height: 190,
    weight: 89,
    sex: "male",
  },
  {
    name: "Fanta",
    surname: "Burbulienė",
    age: 24,
    height: 181,
    weight: 83,
    sex: "female",
  },
  {
    name: "Ežvyra",
    surname: "Paplūdė",
    age: 20,
    height: 166,
    weight: 55,
    sex: "female",
  },
  {
    name: "Čiobaras",
    surname: "Ramūnskas",
    age: 29,
    height: 179,
    weight: 59,
    sex: "male",
  },
  {
    name: "Vabalas",
    surname: "Skėrys",
    age: 13,
    height: 169,
    weight: 90,
    sex: "male",
  },
  {
    name: "Kola",
    surname: "Burbulienė",
    age: 34,
    height: 193,
    weight: 83,
    sex: "female",
  },
];
console.groupCollapsed("--------1 dalis-------");
console.group(
  "1. Sukurti objektų(žmonių) masyvą su 8 elementais, kuriame būtų:"
);
/*
  - name
  - surname
  - age
  - height
  - weight
  - sex
  */
{
  console.log(peopledata);
}
console.groupEnd();

console.group("2. Panaudojant array.forEach:");
//- Atspausdinti kiekvieną elementą
//- Atspausdinti kiekvieno elemento pilną vardą
//- Atspausdinti kiekvieno elemento kūno masės indeksą
{
  peopledata.forEach((person) => console.log(person));
  peopledata.forEach((person) => console.log(person.name, person.surname));

  peopledata.forEach((person) => {
    const personHeightInMeters = person.height / 100;
    const kmi = person.weight / personHeightInMeters ** 2;
    console.log(kmi);
  });
}
console.groupEnd();

console.group(
  "3. Panaudojant array.filter atrinkti į naują masyvą ir po to atspausdinti žmones:"
);
/*
  - kurių vardas ilgesnis nei 6 simboliai
  - kurių svoris didesnis nei 80kg
  - kurie aukštesni nei 185cm
*/
{
  const personWithLongName = peopledata.filter(
    (person) => person.name.length > 6
  );
  console.log(personWithLongName);

  const personWeightMoreThan80 = peopledata.filter(
    (person) => person.weight > 80
  );
  console.log(personWeightMoreThan80);

  const tallPeople = peopledata.filter((person) => person.height > 185);
  console.log(tallPeople);
}
console.groupEnd();

console.group(
  "4. Panaudojant array.map atrinkti į naują masyvą ir po to atspausdinti"
);
/*
  - ūgius
  - svorius
  - ūgius, svorius ir amžius : [{height, weight, age}, ...]
  - KMI indeksus
  - KMI indeksus ir amžius
*/
{
  const height = peopledata.map((person) => person.height);
  console.log(height);

  const weight = peopledata.map((person) => person.weight);
  console.log(weight);

  const array1 = peopledata.map(
    (person) =>
      `height: ${person.height}, weight: ${person.weight}, age: ${person.age}`
  );
  console.log(array1);

  const array2 = peopledata.map((person) => {
    const personHeightInMeters = person.height / 100;
    const kmi = person.weight / personHeightInMeters ** 2;
    return kmi;
  });
  console.log(array2);

  const array3 = peopledata.map((person) => {
    const personHeightInMeters = person.height / 100;
    const kmi = person.weight / personHeightInMeters ** 2;
    return `KMI: ${kmi} age: ${person.age} `;
  });

  console.log(array3);
}
console.groupEnd();

console.group("5. Panaudojant array.reduce suskaičiuoti ir po to atspausdinti");
/*
  - svorių vidurkį
  - ūgio vidurkį
*/
{
  const weightSum = peopledata.reduce(
    (prevSum, sum) => prevSum + sum.weight,
    0
  );
  const weightAvg = weightSum / peopledata.length;
  console.log(weightAvg);

  const heightSum = peopledata.reduce(
    (prevSum, sum) => prevSum + sum.height,
    0
  );
  const heightAvg = heightSum / peopledata.length;
}
console.groupEnd();

console.groupEnd();

class Person {
  name;
  surname;
  age;
  height;
  weight;
  sex;
  constructor({ name, surname, age, height, weight, sex }) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.height = height;
    this.weight = weight;
    this.sex = sex;
  }

  get BMI() {
    const personHeightInMeters = this.height / 100;
    const kmi = this.weight / personHeightInMeters ** 2;
    return kmi;
  }

  toString() {
    console.log(this);
  }
}

let person;
person = peopledata.map((persons) => new Person(persons));

console.groupCollapsed("--------2 dalis-------");

console.group(
  "0. Pasinaudojant 1 dalies elementų masyvu, sukurti Person prototipų(Class) masyvą:"
);
/* 
    Person klasėje:    
    - sukurti vidinį metodą: getBMI();     // suskaičiuoja kūno masės indeksą
    - sukurti vidinį metodą: toString();   // atspausdina žmogų su esamom savybėm
*/
{
  person.forEach((people) => console.log(people.BMI));
  person.toString();
}
console.groupEnd();
console.group(
  "1. Atrinkti moteris, kuriuos jaunesnės nei 20 metų ir svoris didesnis nei 70kg "
);
{
  const filterWomen = person.filter(
    (women) => women.sex === "female" && women.age > 20 && women.weight > 70
  );
  console.log(filterWomen);
}
console.groupEnd();

console.group(
  "2. Atrinkti vyrus, kurie vyresni nei 25 metai ir KMI mažesnis nei 18,5"
);
{
  const filterMan = person.filter(
    (man) => man.sex === "male" && man.age > 25 && man.BMI < 18.5
  );
  console.log(filterMan);
}
console.groupEnd();

console.group("3. Atrinkti vaikus, su antsvoriu (KMI > 30)");
{
  const overweightChildren = person.filter(
    (child) => child.age < 18 && child.BMI > 30
  );
  console.log(overweightChildren);
}
console.groupEnd();

console.group("4. Atrinkti pensininkus, su antsvoriu (KMI > 30)");
{
  const overweightPensioners = person.filter(
    (child) => child.age > 65 && child.BMI > 30
  );
  console.log(overweightPensioners);
}
console.groupEnd();

console.group("5. Atrinkti visus, kieno KMI nepatenka į rėžius [18.5; 25]");
{
  const normalBMI = person.filter(
    (child) => child.BMI > 18.5 && child.BMI < 25
  );
  console.log(normalBMI);
  normalBMI.forEach((person) => console.log(person.BMI));
}
console.groupEnd();

console.groupEnd();
