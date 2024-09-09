// setTimeout is function which give output after certain amount of time 

function hello(){
    console.log("hello haider sorry for 4 seconds late");
}
setTimeout(hello,4000) // 4s = 4000 miliseconds

//we also write code like this 

setTimeout( () => {
    console.log("Sorry again");
},5000)