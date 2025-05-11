// fetch() method starts the process og fetching a resource from the network, returning a promises
// which is fulfilled once the response is available

// basic syntex 
// fetch('url)
// .then((response)=>{
//     response.json();
// })
// .then((data)=>{
//     console.log(data)
// }).catch((Error)=>{
//   console.log(Error)
// });


fetch("https://jsonplaceholder.typicode.com/users")
.then(response=>
    response.json())
.then(data=>
   console.log(data))
.catch(Error=>
    console.log(Error))
// fetch('https://jsonplaceholder.typicode.com/posts/1')
//   .then(response => response.json())  // Server ka jawab JSON me padho
//   .then(data => {
//     console.log(data);  // Data ko console me dikhayo
//   })
//   .catch(error => {
//     console.log('Error aayi:', error); // Agar koi error aayi to
//   });
