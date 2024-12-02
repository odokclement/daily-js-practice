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