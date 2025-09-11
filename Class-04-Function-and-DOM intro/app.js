/// if (9 > 7) {
//     console.log("Sahi Ha");
// }else{
//     console.log("sahi nhi ha");
// }


// var age = +prompt("Enter Your Age");
// if (age >= 20){
// console.log("Addmision Are Open");
// }else if (age >= 17) {
//     console.log("3000 Do addmision ho jai gai");
// }else if (age >= 14) {
//     console.log("Bhai Ghar ja tum se kaam nhi hoga");
// }else{
//     console.log("do`nt allow addmision for this age");
// }


// var num = +prompt("Enter your Value");

// if (num %  3 === 0) {
//     console.log("ok");
// }else{
//     console.log("sorry");
// }


// var num1 = +prompt("Enter Your Value");
// var num2 = +prompt("Enter Your Value");
// var operator = prompt("+ - * /");

// if (operator === "+") {
//     console.log("Addition" , num1 + num2);
// }else if (operator === "-") {
//     console.log("Subtraction" , num1 - num2);
// }else if (operator === "*") {
//     console.log("Mulipliocation" , num1 * num2);
// }else if (operator === "/") {
//     console.log("Divsion" , num1 / num2);
// } else {
//     console.log('Invailed Operator');
// }

function first(username) {
    console.log("hello first class" , username);
}function second(age) {
    console.log("second Function" , age);
    first("zaheer" );
}
second();