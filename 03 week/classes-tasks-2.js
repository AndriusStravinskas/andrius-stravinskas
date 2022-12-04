console.groupCollapsed('1. - https://edabit.com/challenge/ZngT4zDckDugt2JGY');
{
  // ... code
  class SportsPlayer {
    name;
    age;
    height;
    weight;
    constructor(name, age, height, weight) {
      this.name = name;
      this.age = age;
      this.height = height;
      this.weight = weight;
    };
  
    getAge() {
  
      return `${this.name} is age ${this.age}`;
    };
  
    getHeight() {
  
      return `${this.name} is ${this.height}cm`
    };
  
    getWeight() {
      return `${this.name} weighs ${this.weight}kg`
    }
  };
  
  const p1 = new SportsPlayer("David Jones", 25, 175, 75)
  console.log(p1);
  console.log(p1.getAge())
  console.log(p1.getHeight())
  console.log(p1.getWeight())

}
console.groupEnd();

console.groupCollapsed('2. - https://edabit.com/challenge/yxKoCKemzacK6PECM');
{
  // ... code
  class Calculator {
    sum;
  
    constructor() {
      this.sum = 0;
   
    };
  
    add(x, y) {
      
      this.sum = x + y;
      return this.sum;
    };
  
    subtract(x, y){
      this.sum = x - y;
      return this.sum;
    };
  
    multiply(x, y){
      this.sum = x * y;
      return this.sum;
    };
  
    divide(x, y){
      this.sum = x / y;
      return this.sum;
    };
  
  };
  
  const calculator = new Calculator()
  
  console.log(calculator);
  
  console.log(calculator.add(10, 5));
  console.log(calculator.subtract(10, 5));
  console.log(calculator.multiply(10, 5));
  console.log(calculator.divide(10, 5));
  
}
console.groupEnd();

console.groupCollapsed('3. - https://edabit.com/challenge/kGLhgwGaLJsCMS7wS');
{
  // ... code
  class Employee {
    firstname;
    lastname;
    
    constructor(firstname, lastname) {
      this.firstname = firstname;
      this.lastname = lastname;
  
    };
  
    fullName() {
      return `${this.firstname} ${this.lastname}`;
    };
  
    email() {
  
      return `${this.firstname.toLowerCase()}.${this.lastname.toLowerCase()}@company.com`;
    };
  
    firstName() {
      return `${this.firstname}`;
    };
  
    lastN() {
      return `${this.lastname}`;
    };
  
  };
  
  const emp1 = new Employee("John", "Smith")
  console.log(emp1.fullName());
  console.log(emp1.email());
  console.log(emp1.firstName());
  console.log(emp1.lastN());
  
}
console.groupEnd();

console.groupCollapsed('4. - https://edabit.com/challenge/iwdZiFucR5wkQsFHu');
{
  // ... code
  class Person {
    name;
    age;
  
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    compareAge(other) {
      
    
    if(this.age < other.age) {
  
      return `${other.name} is older than me.`;
  
    } else if(this.age > other.age) {
  
      return`${other.name} is younger than me.`;
  
    } else if(this.age = other.age) {
  
      return`${other.name} is the same age as me.`;
    };
  
  };
  }
  
  const p1 = new Person("Samuel", 24);
  const p2 = new Person("Joel", 36);
  const p3 = new Person("Lily", 24);
  const p = [p1, p2, p3];
  console.log(p1);
  console.log(p)
  
  console.log(p1.compareAge(p2));
  console.log(p1.compareAge(p3));
  
  console.log(p2.compareAge(p1));
  console.log(p2.compareAge(p3));
  
  console.log(p3.compareAge(p1));
  console.log(p3.compareAge(p2));


}
console.groupEnd();

console.groupCollapsed('5. - https://edabit.com/challenge/Hgb38yhWGwJCMHbRQ');
{
  // ... code

class Circle {
	// put your code here
	constructor(radius){
		this.radius = radius
		this.PI = Math.PI
	}
	getArea() {
		return this.PI * this.radius ** 2;
	}

	getPerimeter() {
		return 2 * this.PI * this.radius;
	}
}


// unquote and use run to test these cases:

let circo = new Circle(20);
console.log(circo.getArea());
console.log(circo.getPerimeter());

let q = new Circle(4.44);
console.log(q.getArea());
console.log(q.getPerimeter());

}
console.groupEnd();

console.groupCollapsed('6. - https://edabit.com/challenge/qNMtrtizgssAQqP2b');
{
  // ... code
  class Name {
    firstName;
    lastName;
  
    constructor(firstName, lastName) {
      this.firstName = firstName.charAt(0).toUpperCase() + firstName.toLowerCase().slice(1);
      this.lastName = lastName.charAt(0).toUpperCase() + lastName.toLowerCase().slice(1);;
  
    }
  
    fname() {
      return `${this.firstName}`;
    };
  
    lname() {
      return `${this.lastName}`;
    };
  
    fullname() {
      return `${this.firstName} ${this.lastName}`;
    };
  
    initials() {
      return `${this.firstName.charAt(0)}.${this.lastName.charAt(0)}`;
    };
  }
  
  a1 = new Name("john", "SMITH");
  a2 = new Name("sARah", "fRolliE");
  
  console.log(a1.fname());
  console.log(a1.lname());
  console.log(a1.fullname());
  console.log(a1.initials());


}
console.groupEnd();

console.groupCollapsed('7. - https://edabit.com/challenge/HKmJFmZZCX53ff4ke');
{
  // ... code
  class IceCream {

    constructor(flavor, numSprinkles) {
      this.flavor = flavor
      this.numSprinkles = numSprinkles
    }
  
  }
  function sweetestIcecream(arr) {
  console.log(arr)
    let flavors = {
      Plain: 0,
      Vanilla: 5,
      ChocolateChip: 5,
      Strawberry: 10,
      Chocolate: 10
    }
      
      return Math.max(...arr.map(ice => flavors[ice.flavor] + ice.numSprinkles))
  }
  
  const ice1 = new IceCream("Chocolate", 13)
  const ice2 = new IceCream("Vanilla", 0)
  const ice3 = new IceCream("Strawberry", 7)
  const ice4 = new IceCream("Plain", 18)
  const ice5 = new IceCream("ChocolateChip", 3)
  const ice6 = new IceCream("Chocolate", 23)
  const ice7 = new IceCream("Strawberry", 0)
  const ice8 = new IceCream("Plain", 34)
  const ice9 = new IceCream("Plain", 81)
  const ice10 = new IceCream("Vanilla", 12)
  
  
  console.log(sweetestIcecream([ice1, ice2, ice3, ice4, ice5]), 23)
  console.log(sweetestIcecream([ice7, ice10, ice1, ice6, ice8, ice10, ice2, ice2]), 34)
  console.log(sweetestIcecream([ice10, ice10, ice6, ice8, ice4]), 34)
  console.log(sweetestIcecream([ice2, ice10, ice6, ice9, ice7]), 81)
  console.log(sweetestIcecream([ice10, ice6, ice4, ice1, ice7, ice8, ice6]), 34)
  console.log(sweetestIcecream([ice3, ice1]), 23)
  console.log(sweetestIcecream([ice6, ice7, ice5, ice4, ice3]), 33)
  console.log(sweetestIcecream([ice4, ice8, ice9]), 81)
  console.log(sweetestIcecream([ice5, ice7]), 10)
  console.log(sweetestIcecream([ice5, ice3, ice6, ice2, ice7, ice2, ice7, ice2]), 33)
  console.log(sweetestIcecream([ice1, ice9, ice10, ice9, ice7, ice1, ice9]), 81)

}
console.groupEnd();

console.groupCollapsed('8. - https://edabit.com/challenge/9zwdrfW99zmdRhibi');
{
  // ... code
  class OnesThreesNines {
    constructor(num) {
      this.num = num;
    }
  
    get ones() {
      return this.calcOnes()
    }
  
    get threes() {
      return this.calcThrees()
    }
  
    get nines() {
      return this.calcNines()
    }
  
    calcOnes() {
      return this.num / 1;
    }
  
    calcThrees() {
      return Math.floor(this.num / 3);
    }
  
    calcNines() {
      return Math.floor(this.num / 9);
    }
  }
  
  const probs = [{
    num:0,
    which:'ones',
    expect:0
  },{
    num:1,
    which:'threes',
    expect:0
  },{
    num:2,
    which:'nines',
    expect:0
  },{
    num:3,
    which:'ones',
    expect:3
  },{
    num:4,
    which:'threes',
    expect:1
  },{
    num:10,
    which:'nines',
    expect:1
  },{
    num:13,
    which:'ones',
    expect:13
  },{
    num:15,
    which:'threes',
    expect:5
  },{
    num:17,
    which:'nines',
    expect:1
  },{
    num:20,
    which:'nines',
    expect:2
  }];
  
  probs.forEach(prob=>{
      let testInstance = new OnesThreesNines(prob.num);
      console.log(testInstance[prob.which], prob.expect)
  })
  
}
console.groupEnd();

console.groupCollapsed('9. - https://edabit.com/challenge/7PA4jhWqDYJT4ixLp');
{
  // ... code
  class User {
    static userCount = 0
  
    constructor(user) {
      User.userCount += 1
      this.user = user;
      this.userCount = User.userCount
    }
  
    username() {
      return this.user
    }
  }
  
  
  const u1 = new User("johnsmith10")
  const u2 = new User("marysue1989")
  
  console.log(u1)
  console.log(u2)
  
  console.log(u1.username())
  console.log(u1.userCount)
  
  console.log(u2.username())
  console.log(u2.userCount)
  
  
}
console.groupEnd();

console.groupCollapsed('10. - https://edabit.com/challenge/s5Sz2ovKsvtGxNGgn');
{
  // ... code
  class Book {

    constructor(title, author) {
    
      this.title = title;
      this.author = author;
    };
    
      getTitle() {
        return `title: ${this.title}`;
      };
    
      getAuthor() {
        return `Author: ${this.author}`;
      };
    
    };
    
    
    const PP = new Book('Pride and Prejudice', 'Jane Austen');
    const H = new Book('Hamlet', 'William Shakespeare');
    const WP = new Book('War and Peace', 'Leo Tolstoy');
    
    console.log(PP);
    console.log(H);
    console.log(WP);
    
    console.log(PP.getTitle());
    console.log(PP.getAuthor());
    
    console.log(H.getTitle());
    console.log(H.getAuthor());
    
    console.log(WP.getTitle());
    console.log(WP.getAuthor());
}
console.groupEnd();
