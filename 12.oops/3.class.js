// jese function bana ke usske ander constructer banate vese hi class ke ander bhi banate he constructer  

// but class ke ander constructer name likna padhta he 

// fir ak object bana ke ussa data lete he 


class employee{
    constructor(name,age,job){
        this.name=name;
        this.age=age;
        this.job=job;
    }
}

let emp = new employee("haider",18,"bussiness man");
console.log(emp);