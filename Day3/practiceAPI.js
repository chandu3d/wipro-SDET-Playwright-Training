// 1***********************************  posts ********************************************
//fetch("https://jsonplaceholder.typicode.com/posts")
//.then(data=>data.json())
//.then(data=>data.filter(d=>d.id%3 === 0))
//.then(data=>data.map(d=>({
//    id:d.id,
//    title:d.title
//})))
//.then(data=>console.log(data))
//.catch(data=>console.error("Error" ,data));

//2**************************users **********************************


//fetch("https://jsonplaceholder.typicode.com/users")
//.then(data=>data.json())
//.then(data=>data.filter(d=>d.id<=10))
//.then(data=>data.map(d=>({
//    d: d.id,
//    username:"Manaswi " + d.username
//})))
//.then(data=>console.log(data))
//.catch(data=>console.log("Error", data));


//3*********************fakestore ************************************

//fetch("https://fakestoreapi.com/products")
//.then(data=>data.json())
//.then(data=>data.filter(d=>d.price>10))
//.then(data=>data.map(d=>({
//    price:d.price,
//    title:d.title
//})))
//.then(data=>console.log(data))
//.catch(data=>console.error(data));

//4******************** pokeapi *********************************************
//fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
//.then(data=>data.json())
//.then(data=>data.results.map(d=>d.name))
//.then(data=>console.log(data))
//.catch(data=>console.error(data))


//5************************* todos *****************************************************

//fetch("https://jsonplaceholder.typicode.com/todos")
//.then(data=>data.json())
//.then(data=>data.filter(d=>d.id%2===0))
//.then(data=>data.map(d=>d.title="manaswi" + d.title ))
//.then(data=>{console.log(data);})
//.catch(data=>{console.error(data);});



//6************************************** API comments ************************************
//fetch("https://jsonplaceholder.typicode.com/comments")
//.then(data=>data.json())
//.then(data=>data.map(d=>({
//    id:d.id,
//    email:d.email
//})))
//.then(data=>console.log(data))
//.catch(data=>console.error(data));




//7************************************randomuserAPI ******************************** 
//fetch("https://randomuser.me/api/?results=10")
//.then(data=>data.json())
//.then(data => data.results)   
//.then(data=>data.filter(d=>d.cell !=0))
//.then(data=>data.map(d=>d.gender))
//.then(data=>console.log(data))
//.catch(data=>console.error(data))



//8****************************************catfacts************************** 
//fetch("https://catfact.ninja/facts")
//.then(data=>data.json())
//.then(data=>data.data)
//.then(data=>data.filter(d=>d.length>50))
//.then(data=>data.map(d=>d.fact))
//.then(data=>console.log(data))
//.catch(data=>console.error(data))



//9**************************************university url *************************************
//fetch("http://universities.hipolabs.com/search?country=India")
//.then(data=>data.json())
//.then(data=>data.filter(d=>d.country === "India"))
//.then(data=>data.map(d=>d.web_pages))
//.then(data=>console.log(data))
//.catch(data=>console.error(data))


//********************************fetch email from random user *****************************
fetch("https://randomuser.me/api/?results=10")
.then(data=>data.json())
.then(data=>data.results)
.then(data=>data.filter(d=>d.cell != 0))
.then(data=>data.map(d=>d.email))
.then(data=>console.log(data))
.catch(data=>console.error(data))