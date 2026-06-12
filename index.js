console.log("hello raju")
var a = 10;
var b = 20;
console.log(a * b);
console.log(b - a);
var c = 152.46
var d = "razz"
var e = true
console.log(c);
console.log(d);
console.log(e);
var x = 10;
var y = "10"
if (x == y) {           //==checks only value
    console.log("yess")
}
else {
    console.log("noooo")
}

if (x === y) {                  //===checks both value and data type
    console.log("yess")
}
else {
    console.log("noooo")
}
console.log(2 * 3);
console.log(2 ** 3)  //2 power 3
for (var i = 1; i <= 9; i++) {
    console.log(i + " ");
}
var yr = 2016;
if ((yr % 4 == 0 && yr % 100 != 0) || yr % 400 == 0) {
    console.log("leap Year");
}
else {
    console.log("not a leap year")
}
var prime=12
var fc=0;
for(var i=1; i<=prime;i++ )
{
    if(prime%i==0){
        fc++;
    }
    if(fc==2){
        console.log("prime")
    }
    else{
        console.log("not a prime")
    }
}