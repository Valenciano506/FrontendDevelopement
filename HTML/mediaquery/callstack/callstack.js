function finalTask(){
    console.log("3. Inside finaltask");
}

function secondTask(){
    console.log("2. Inside secondTask");
    finalTask(); //Pushes finalTask onto the stack
}

function firstTask(){
    console.log("1. Inside firstTask");
    secondTask(); //Pushes secondTask onto the stack
}

firstTask();

function add(num){
    console.log(num);
    add(++num);
}

add(0);