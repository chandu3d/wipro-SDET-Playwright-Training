let timein=setTimeout(()=>{console.log("data success")},3000);
clearTimeout(timein);//clear the setTimeout

let timeint=setInterval(()=>{console.log("connecting...")},3000);
clearInterval(timeint);