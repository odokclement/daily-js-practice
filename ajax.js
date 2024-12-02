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