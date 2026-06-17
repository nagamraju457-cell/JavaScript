
// function add(a,b){
//     return a-b;
// }
// console.log(add(39,75));

// function multiply(a,b){
//     return a*b;
// }

// console.log(multiply(10,30));

// const myFun=function(a,b){
//     return a+b;
// }
// console.log(myFun(10,20));

// const myFun3=(a,b)=>a-b;

// console.log(myFun3(10,3));


// const button = document.querySelector("body");
// const heading = document.querySelector("h1");

// button.addEventListener("click", function() 
// {
//     heading.textContent = "Welcome to JavaScript!";
// });
// let x=document.getElementsByTagName("h1");
// console.log(x[0].innerHTML);

const change = ()=>{
    var a="#"+Math.floor(Math.random()*1000000);
    a=a.toString(16);
    a=a.padStart(6,"0");
    document.getElementById("rom").style.backgroundColor=a;
    console.log(a );
    
   
}