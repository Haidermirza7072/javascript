let arr = [1,2,3,4,5,6,7,8,9,10]

let traget = 2;

function result(traget){
    let available = false;
    for(let i = 0; i<arr.length ;i++){
        if(arr[i] == traget){
            available = true;
            break;
        }
    }
    return available;
};

console.log(result(traget));