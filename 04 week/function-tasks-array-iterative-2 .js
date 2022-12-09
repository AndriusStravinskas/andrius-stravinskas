const students = [
  {
    name: "Panatėja",
    surname: "Sulindytė",
    faculty: "Informatikos fakultetas",
    course: 2,
    modules: [
      {
        title: "Operacinės sistemos",
        credits: 6,
        marks: [10, 7, 7, 6, 9],
      },
      {
        title: "Algoritmų analizė",
        credits: 9,
        marks: [8, 8, 6, 4, 6],
      },
      {
        title: "Tikimybės ir Statistika",
        credits: 6,
        marks: [9, 7, 8, 9, 6],
      },
      {
        title: "Inžinerinis projektas",
        credits: 3,
        marks: [10, 8, 9, 8],
      },
      {
        title: "Kompiuterių architektūra",
        credits: 6,
        marks: [6, 8, 7, 8, 8],
      },
    ],
  },
  {
    name: "Serbentautas",
    surname: "Bordiūras",
    faculty: "Informatikos fakultetas",
    course: 1,
    modules: [
      {
        title: "Matematika",
        credits: 6,
        marks: [7, 6, 9, 10, 8],
      },
      {
        title: "Duomenų struktūros",
        credits: 6,
        marks: [7, 8, 9, 4, 8],
      },
      {
        title: "Skaitmeninė logika",
        credits: 6,
        marks: [6, 8, 10, 9, 9],
      },
      {
        title: "Objektinis programavimas",
        credits: 6,
        marks: [10, 8, 9, 8, 8],
      },
      {
        title: "Fizika",
        credits: 6,
        marks: [6, 7, 8, 8, 8],
      },
    ],
  },
  {
    name: "Laptokas",
    surname: "Klavianskas",
    faculty: "Informatikos fakultetas",
    course: 1,
    modules: [
      {
        title: "Matematika",
        credits: 6,
        marks: [9, 8, 10, 9, 10],
      },
      {
        title: "Duomenų struktūros",
        credits: 6,
        marks: [9, 9, 10, 10, 8],
      },
      {
        title: "Skaitmeninė logika",
        credits: 6,
        marks: [10, 10, 10, 9, 10],
      },
      {
        title: "Objektinis programavimas",
        credits: 6,
        marks: [9, 8, 9, 10, 10],
      },
      {
        title: "Fizika",
        credits: 6,
        marks: [8, 9, 8, 10, 8],
      },
    ],
  },
  {
    name: "Skaistė",
    surname: "Kolbaitė",
    faculty: "Chemijos fakultetas",
    course: 4,
    modules: [
      {
        title: "Organinė chemija",
        credits: 6,
        marks: [9, 9, 10, 9, 8],
      },
      {
        title: "Inžinerinės medžiagos",
        credits: 3,
        marks: [10, 10, 10, 9, 9],
      },
      {
        title: "Entalpija ir Entropija",
        credits: 6,
        marks: [9, 9, 9, 9],
      },
      {
        title: "Polimerų atmainos ir produktai",
        credits: 9,
        marks: [10, 9, 8, 10, 7],
      },
      {
        title: "Pramoninė chemija",
        credits: 6,
        marks: [9, 10, 10, 10, 9],
      },
    ],
  },
  {
    name: "Cilindras",
    surname: "Katalizatorius",
    faculty: "Chemijos fakultetas",
    course: 2,
    modules: [
      {
        title: "Organinė chemija",
        credits: 6,
        marks: [6, 8, 9, 4, 8],
      },
      {
        title: "Inžinerinės medžiagos",
        credits: 3,
        marks: [9, 8, 7, 8, 10],
      },
      {
        title: "Entalpija ir Entropija",
        credits: 6,
        marks: [7, 8, 9, 10, 6],
      },
      {
        title: "Polimerų atmainos ir produktai",
        credits: 9,
        marks: [8, 9, 6, 4],
      },
      {
        title: "Pramoninė chemija",
        credits: 6,
        marks: [8, 7, 9, 5, 9],
      },
    ],
  },
  {
    name: "Grandinius",
    surname: "Varžauskas",
    faculty: "Elektros ir elektronikos fakultetas",
    course: 3,
    modules: [
      {
        title: "Matematika",
        credits: 6,
        marks: [8, 9, 9, 9, 9],
      },
      {
        title: "Elektos grandinės",
        credits: 6,
        marks: [8, 7, 9, 9, 10],
      },
      {
        title: "Elektros tinklai",
        credits: 6,
        marks: [9, 9, 8, 8, 10],
      },
      {
        title: "Braižyba",
        credits: 6,
        marks: [6, 8, 9, 8, 7],
      },
      {
        title: "Fizika",
        credits: 6,
        marks: [9, 9, 9, 10, 8],
      },
    ],
  },
];

console.groupEnd();

console.groupCollapsed(
  "1. Atspausdinti visus Informatikos fakulteto studentus"
);
{
  // ... sprendimas ir spausdinimas
  students.forEach((student) => console.log(student));
}
console.groupEnd();

console.groupCollapsed("2. Atspausdinti visus Chemijos fakulteto studentus");
{
  // ... sprendimas ir spausdinimas
  students.filter((student) => {
    if (student.faculty === "Chemijos fakultetas") console.log(student);
  });
}
console.groupEnd();

console.groupCollapsed(
  "3. Atspausdinti visus Elektros ir elektronikos fakulteto studentus"
);
{
  // ... sprendimas ir spausdinimas
  students.filter((student) => {
    if (student.faculty === "Elektros ir elektronikos fakultetas")
      console.log(student);
  });
}
console.groupEnd();

console.groupCollapsed("4. Atspausdinti tik pirmo kurso studentus");
{
  // ... sprendimas ir spausdinimas
  students.filter((student) => {
    if (student.course === 1) console.log(student);
  });
}
console.groupEnd();

console.groupCollapsed("5. Atspausdinti tik antro kurso studentus");
{
  // ... sprendimas ir spausdinimas
  students.filter((student) => {
    if (student.course === 2) console.log(student);
  });
}
console.groupEnd();

console.groupCollapsed("6. Atspausdinti tik trečio kurso studentus");
{
  // ... sprendimas ir spausdinimas
  students.filter((student) => {
    if (student.course === 3) console.log(student);
  });
}
console.groupEnd();

console.groupCollapsed("7. Atspausdinti tik ketvirto kurso studentus");
{
  // ... sprendimas ir spausdinimas
  students.filter((student) => {
    if (student.course === 4) console.log(student);
  });
}
console.groupEnd();

console.groupCollapsed(
  "8. Iš students masyvo atrinkti ir atspausdinti visų studentų vidurkius"
);
{
  // ... sprendimas ir spausdinimas
  console.groupCollapsed("su for of loop");
  {
    for (const student of students) {
      let totalMarks = 0;
      let totalCredits = 0;

      for (const module of student.modules) {
        const marks = module.marks;
        const credits = module.credits;

        totalMarks +=
          (marks.reduce(
            (prevMarks, currentMarks) => prevMarks + currentMarks,
            0
          ) *
            credits) /
          marks.length;
        totalCredits += credits;
      }

      const marksAvarage = (totalMarks / totalCredits).toFixed(2);
      console.log(
        `${student.name} ${student.surname} marks avarage is ${marksAvarage}`
      );
    }
  }
  console.groupEnd();

  console.groupCollapsed("Su for loop");
  {
    for (let index = 0; index < students.length; index++) {
      const student1 = students[index];
      let creditSum = 0;
      let wheightedModuleAvgSum = 0;

      for (let o = 0; o < student1.modules.length; o++) {
        const student1Modules1 = student1.modules[o];
        let student1module1sum = 0;

        for (let i = 0; i < student1Modules1.marks.length; i++) {
          const student1Modules1marks1 = student1Modules1.marks[i];
          student1module1sum += student1Modules1marks1;
        }

        const student1module1Avg =
          student1module1sum / student1Modules1.marks.length;
        const moduleCredits = student1Modules1.credits;

        wheightedModuleAvgSum += student1module1Avg * moduleCredits;

        creditSum += moduleCredits;
      }
      const studentsAvg = wheightedModuleAvgSum / creditSum;

      console.log(
        `${student1.name} ${student1.surname} marks avarage is ${studentsAvg.toFixed(2)}`
      );
    }
  }
  console.groupEnd();
}
console.groupEnd();

console.groupCollapsed(
  "9. Atspausdinti visų Informatikos fakulteto studentų vidurkius"
);
{
  // ... sprendimas ir spausdinimas
  console.groupCollapsed("su for of loop");
  for (const student of students.filter(
    (student) => student.faculty === "Informatikos fakultetas"
  )) {
    let totalMarks = 0;
    let totalCredits = 0;

    for (const module of student.modules) {
      const marks = module.marks;
      const credits = module.credits;

      totalMarks +=
        (marks.reduce(
          (prevMarks, currentMarks) => prevMarks + currentMarks,
          0
        ) *
          credits) /
        marks.length;
      totalCredits += credits;
    }

    const marksAvarage = (totalMarks / totalCredits).toFixed(2);
    console.log(
      `${student.name} ${student.surname} marks avarage is ${marksAvarage}`
    );
  }
  console.groupEnd();

  {
    console.groupCollapsed("Su for loop");

    const infostudent = [];
    for (let i = 0; i < students.length; i++) {
      if (students[i].faculty === "Informatikos fakultetas") {
        infostudent.push(students[i]);
      }
    }
    for (let i = 0; i < infostudent.length; i++) {
      // const student1 = students[i];
      const student1 = infostudent[i];
      let studentsMarksDoubleCredits = 0;

      let studentCreditSum = 0;

      for (let i = 0; i < student1.modules.length; i++) {
        const student1Modules1 = student1.modules[i];

        let studentModuleSum = 0;

        for (let i = 0; i < student1Modules1.marks.length; i++) {
          const student1Modules1Marks1 = student1Modules1.marks[i];

          studentModuleSum += student1Modules1Marks1;
        }

        const studentModuleSumAvg =
          studentModuleSum / student1Modules1.marks.length;

        const studentModuleCredits = student1Modules1.credits;

        studentsMarksDoubleCredits +=
          studentModuleSumAvg * studentModuleCredits;

        studentCreditSum += studentModuleCredits;
      }

      const studentsAvg = studentsMarksDoubleCredits / studentCreditSum;

      console.log(
        `${student1.name} ${student1.surname} form ${
          student1.faculty
        } marks avarage is ${studentsAvg.toFixed(2)}`
      );
    }
  }
  console.groupEnd();
}
console.groupEnd();

console.groupCollapsed("10. Atspausdinti visų Chemijos fakulteto studentų vidurkius");

{

  console.groupCollapsed("su for of loop");
  // ... sprendimas ir spausdinimas
  for (const student of students.filter((student) => student.faculty === "Chemijos fakultetas")) {
    let totalMarks = 0;
    let totalCredits = 0;

    for (const module of student.modules) {
      const marks = module.marks;
      const credits = module.credits;

      totalMarks +=
        (marks.reduce(
          (prevMarks, currentMarks) => prevMarks + currentMarks,
          0
        ) *
          credits) /
        marks.length;
      totalCredits += credits;
    }

    const marksAvarage = (totalMarks / totalCredits).toFixed(2);
    console.log(
      `${student.name} ${student.surname} marks avarage is ${marksAvarage}`
    );
  }

  console.groupEnd();

  console.groupCollapsed("Su for loop");

  {
    const infostudent = [];
    for (let i = 0; i < students.length; i++) {
      if (students[i].faculty === "Chemijos fakultetas") {
        infostudent.push(students[i]);
      }
    }
    for (let i = 0; i < infostudent.length; i++) {
      // const student1 = students[i];
      const student1 = infostudent[i];
      let studentsMarksDoubleCredits = 0;

      let studentCreditSum = 0;

      for (let i = 0; i < student1.modules.length; i++) {
        const student1Modules1 = student1.modules[i];

        let studentModuleSum = 0;

        for (let i = 0; i < student1Modules1.marks.length; i++) {
          const student1Modules1Marks1 = student1Modules1.marks[i];

          studentModuleSum += student1Modules1Marks1;
        }

        const studentModuleSumAvg =
          studentModuleSum / student1Modules1.marks.length;

        const studentModuleCredits = student1Modules1.credits;

        studentsMarksDoubleCredits +=
          studentModuleSumAvg * studentModuleCredits;

        studentCreditSum += studentModuleCredits;
      }

      const studentsAvg = studentsMarksDoubleCredits / studentCreditSum;

      console.log(
        `${student1.name} ${student1.surname} from ${
          student1.faculty
        } marks avarage is ${studentsAvg.toFixed(2)}`
      );
    }
  }
  console.groupEnd();
}
console.groupEnd();

console.groupCollapsed(
  "11. Atspausdinti visų Elektros ir elektronikos fakulteto studentų vidurkius"
);
{
  console.groupCollapsed("su for of loop");
  // ... sprendimas ir spausdinimas

  for (const student of students.filter(
    (student) => student.faculty === "Elektros ir elektronikos fakultetas"
  )) {
    let totalMarks = 0;
    let totalCredits = 0;

    for (const module of student.modules) {
      const marks = module.marks;
      const credits = module.credits;

      totalMarks +=
        (marks.reduce(
          (prevMarks, currentMarks) => prevMarks + currentMarks,
          0
        ) *
          credits) /
        marks.length;
      totalCredits += credits;
    }

    const marksAvarage = (totalMarks / totalCredits).toFixed(2);
    console.log(
      `${student.name} ${student.surname} marks avarage is ${marksAvarage}`
    );
  }
  console.groupEnd();

  console.groupCollapsed("Su for loop");
  {
    const infostudent = [];
    for (let i = 0; i < students.length; i++) {
      if (students[i].faculty === "Elektros ir elektronikos fakultetas") {
        infostudent.push(students[i]);
      }
    }
    for (let i = 0; i < infostudent.length; i++) {
      // const student1 = students[i];
      const student1 = infostudent[i];
      let studentsMarksDoubleCredits = 0;

      let studentCreditSum = 0;

      for (let i = 0; i < student1.modules.length; i++) {
        const student1Modules1 = student1.modules[i];

        let studentModuleSum = 0;

        for (let i = 0; i < student1Modules1.marks.length; i++) {
          const student1Modules1Marks1 = student1Modules1.marks[i];

          studentModuleSum += student1Modules1Marks1;
        }

        const studentModuleSumAvg =
          studentModuleSum / student1Modules1.marks.length;

        const studentModuleCredits = student1Modules1.credits;

        studentsMarksDoubleCredits +=
          studentModuleSumAvg * studentModuleCredits;

        studentCreditSum += studentModuleCredits;
      }

      const studentsAvg = studentsMarksDoubleCredits / studentCreditSum;

      console.log(
        `${student1.name} ${student1.surname} from ${
          student1.faculty
        } marks avarage is ${studentsAvg.toFixed(2)}`
      );
    }
  }
  console.groupEnd();
}
console.groupEnd();
