// objects and prototypes
// function constructor
function Person(firstName,secondName){
    this.firstName = firstName;
    this.secondName =secondName;
      console.log("function was invoked");
  }
  
  Person.prototype.getFullName = function(){
      return this.firstName + " " + this.secondName;
  };
  
  let person4 = new Person("clement","ochieng");
  // console.log(person4.getFullName());
  
  let person3 = new Person("john","doe");
  // console.log(person3);
  
  
  //object.create
  let personObject ={
      firstName : "default",
      lastName : "default",
      greet : function(){
          return "hi " + this.firstName; 
      }
  };
  
  let man = Object.create(personObject);
  man.firstName = "James";
  man.lastName = "Bob";
  
  // console.log(man);
  
  // console.log(man.greet());
  
  //classes  ES6
  class Car{
     constructor(name){
        this.name = name;
     }
     // methods in class are stored in their prototype
     getName(){
        return`hello  ${this.name}`;
     }
     // static key word
     //static methods and properties belong to the  class  itself and not the instance
     // hence are not available in the prototype chain 
     static residence = "Earth";
     
     static  greet(){
        return "good morning";
     }
  }
  
  console.log(Car.residence);
  console.log(Car.greet());
  
  // extends
  class BMW extends Car{
     getClean(){
       return `clean car`;
     }
  }
  
  let GLE = new BMW("mercedes");
  // console.log(GLE.getName());
  // console.log(GLE.getClean());
  
  // private fields and methods use # can not be accessed directly from out side class function object
  
  //super refers parent class
  class Model extends Car{
     constructor(name,model){
        super(name);
        this.model = model;
     }
     getNameModel(){
        return `${this.getName()}   ${this.model}`;
     }
  }
  
  let Mycar = new Model("BMW","M4");
  // console.log(Mycar.getNameModel());
   
  // getter and setter
  class Rectangle {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
    get area() {
      return this.width * this.height;
    }
    set area(value) {
      this.width = Math.sqrt(value);
      this.height = Math.sqrt(value);
    }
  }
  
  const rect = new Rectangle(10, 20);
  console.log(rect.area); // 200
  rect.area = 100;
  console.log(rect.width); // 10
  console.log(rect.height); // 10
  