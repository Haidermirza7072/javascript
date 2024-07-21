function age(a){
    if(a<18){
        throw new error("age < 18");
    }
    return "you are 18+"
}

try{
   let result = age(10);
   console.log(result);
}
catch(error){
    console.log("error is" + error);
}

finally{
    console.log("clear memory");
}