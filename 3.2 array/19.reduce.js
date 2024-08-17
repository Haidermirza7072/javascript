// reduce make the total of array
//like 1+2+3+4+5 =15 
let arr = [1,2,3,4,5]

let red = (a,b) => {
    return a+b;
}

console.log(arr.reduce(red));

//reduce method is used very reduce 
// same we can do like 

const arr1 = [1, 2, 3, 4, 5];
let sum = 0;

arr1.forEach(function(element) {
  sum += element;
});

console.log(sum); 
