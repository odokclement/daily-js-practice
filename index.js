const arr =[
   1,
   {
       name: "clement",
       streets: "langata"
   },
   function  (name){
       var greet = " hello  ";
       console.log(greet + name);
       
   }
          ];

// arr[2](arr[1].name);


function greeting(){
   let greet ="hi";
   setTimeout(function(){
       console.log(greet);
   },3000);
}

// greeting();


const person={
   address: "main street",
   getFullName: function(){
       let fullName = this.firstName + " " + this.lastName;
       console.log(fullName);
   }
};
// //person.getFullName();

const member ={
   firstName : "think",
   lastName : "book"
};



const person2 ={
   getfirstName: function(){
       return firstName;
   }
};


const name={
   getfirstName: function(){
       return firstname;
   }
};
// console.log(name);

let fullName = person.getFullName.bind(member);
// fullName();

const names ={
   firstName:"josh",
   lastName :"bob"
};
// person.getFullName.apply(names);


// _.extend(member,person,person2);
// console.log(member);



// console.log(member.getFullName());
for (var prop in member){
   console.log(prop + " "+member[prop]);
}
setTimeout(function(){
   console.log("hi");
},2000);



 let stop = setInterval(function(){
   console.log("hello");
},1000);
setTimeout(()=>{
   clearInterval(stop);
   alert("stopped");
},5000);

// array methods
const fruits = ["apple","oranges"];
// console.log(fruits);

//push adds an element to the array-stack
fruits.push("bananas","ovacado","grapes","tomato");
// console.log(fruits);
fruits.pop();
// console.log(fruits);
fruits.shift();
// console.log(fruits);
// unshift adds element to the array
fruits.unshift("apple");
// console.log(fruits);

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

// async , promises , fetch , await
// htpp request
const getTodos = (callback)=>{

const request = new XMLHttpRequest();

request.addEventListener("readystatechange", ()=>{
 if(request.readyState === 4 && request.status === 200){
   // console.log(request.responseText);
   callback(null,request.responseText);
 } else if (request.readyState === 4) {
   // console.log("An error occurred: " + request.status);
    callback(request.status, null);
 }

});

request.open("GET","https://jsonplaceholder.typicode.com/todos/");
request.send();
};
getTodos((err, data) => {
   if (err) {
     console.log("An error occurred: " + err);
   } else {
     console.log("Data received:");
     console.log(data);
   }
 });
// promises 
const getTodos2 = () => {
   return new Promise((resolve, reject) => {
     const request = new XMLHttpRequest();
 
     request.addEventListener("readystatechange", () => {
       if (request.readyState === 4 && request.status === 200) {
         const data = JSON.parse(request.responseText);
         resolve(data); // Resolves the promise with the parsed data
       } else if (request.readyState === 4) {
         reject(request.status); // Rejects the promise with the error status
       }
     });
 
     request.open("GET", "https://jsonplaceholder.typicode.com/todos/");
     request.send();
   });
 };
 
 // Using the Promise
 getTodos2()
   .then((data) => {
     console.log("Promise resolved:", data);
   })
   .catch((err) => {
     console.log("Promise rejected:", err);
   });

//  // API request
 fetch("https://jsonplaceholder.typicode.com/todos/").then((response)=>{
     console.log("data resolved", response);
     return response.json()
 })
 .then((data)=>{
   console.log(data)
 })
 .catch((err)=>{
console.log("could not fetch data", err)
 });
 // async and await

 const getUser = async () => {
   const response = await fetch("https://jsonplaceholder.typicode.com/users/");
 
   if (response.status !== 200) {
     throw new Error("Could not fetch data");
   }
 
   const data = await response.json(); // Await parsing the JSON
   return data;
 };
 
 getUser()
   .then((data) => {
     console.log("Resolved:", data);
   })
   .catch((err) => {
     console.log("Response rejected:", err.message);
   });
 
