//we use map function to perfrom operation in array 
//suppose we have to do addition or subtraction etc etc in array   
// let num = [1,2,3,4,5]

// console.log(num.map(num => num + 1));
// console.log(num.map(num => num - 1));

//example 1:-now suppose we want to do sqaure root of whole array 
//without array square root array 

// let arr1 = [1,2,3,4,5]
// let newarr = []
// for (let i= 0; i < arr1.length; i++) {
//     const element = arr1[i];
//     newarr.push(element**2)
// }

// console.log(newarr);

//now we do with map build in feature


let arr1 = [1,2,3,4,5]
let newarr = arr1.map( e =>{
    return e**2
}) 
console.log(newarr);

