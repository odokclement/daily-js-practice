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
     //porperties and methods created using the static key are not placed on the prototype chain
     // they are attached to the class function object i.e Car
     // they dont reference any of the fields
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
   
  