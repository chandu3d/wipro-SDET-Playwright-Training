function getData(){
    return new Promise((resolve,reject)=>{
        if(3>4){
            setTimeout(()=>{resolve("success");},3000);
        }
        else{
            setTimeout(()=>{reject("Not working");},3000);
        }
    });
}
getData().then(data=>console.log(data))
.catch(error=>console.log(error));

/////fetch API
//fetch("https://jsonplaceholder.typicode.com/todos")
//.then(data=>data.json())
//.then(data=>data.filter(d=>d.id%2===0))
//.then(data=>data.map(d=>d.title="manaswi" + d.title ))
//.then(data=>{console.log(data);})
//.catch(data=>{console.error(data);});