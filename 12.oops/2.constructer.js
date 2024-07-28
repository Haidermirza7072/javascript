// Sometimes we need to create many objects of the same type.

// // To create an object type we use an object constructor function means 
// function ke ander ak object jo bhot sare object ko store kar sakta he 

// note contructer this se banta he 


function employee(name,age,job){

    this.name= name; // data menber
    this.age=age;
    this.job=job;
}

let emp =new employee("jigar",18,"buissness man"); //ye ak object banaya or detail function me se lii
console.log(emp);

// vese hi ham or bhi object bana ke same detail function me se le sakte he like 

let emp1=new employee("haider",20,"boss");
console.log(emp1);





