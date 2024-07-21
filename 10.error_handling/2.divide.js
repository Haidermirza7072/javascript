function divide(a,b){
    if(b==0){
        throw new error("b is not equal to 0 ");
    }
    return a/b;
}
try{
    let result = divide(9,0);  
    console.log(result);  
}
catch(error){
    console.log("error is:" + error.message);
}