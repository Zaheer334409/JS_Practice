// console.log("Hello Promise");
// *******************************Asgnc & sgnc**********************************
// ___________________________Asgnc_________________________//

// console.log("Hello Dear");
// great()
// function great() {
//     console.log("Mubeen is PositionHolder In the Class");
// }
// great();
// console.log("How are you Ab Fatah");
// classrome();
// function classrome() {
//     console.log("I GOES NOT GO TO HEAD OFFICE");
// }
// classrome();
// console.log("WelCome !");

// _______Result___________

// Hello Dear
// Mubeen Is poitionholder in the class
// Mubeen Is poitionholder in the class
// How are you ab fatah
// i goes not go to head office
// i goes not go to head office
// welcome !

// ___________________________sgnc_________________________//

// console.log("Hello Dear");
// great()
// function great() {
//     console.log("Mubeen is PositionHolder In the Class");
// }
// great();
// console.log("How are you Ab Fatah");
// classrome();
// setTimeout(function () {
//     console.log("Hello Zaheer Ali");
// });
// function classrome() {
//     console.log("I GOES NOT GO TO HEAD OFFICE");
// }
// classrome();
// console.log("WelCome !");

// _______Result___________

// Hello Dear
// Mubeen Is poitionholder in the class
// Mubeen Is poitionholder in the class
// How are you ab fatah
// i goes not go to head office
// i goes not go to head office
// welcome !
// Hello Zaheer Ali

// *******************************____Promise_____********************************

// let myPromise = new Promise(function (resolve, reject) {
//     function number() {
//         let randomNum = Math.ceil(Math.random() * 100);
//         if (randomNum % 2 === 0) {
//             resolve(randomNum)
//         } else {
//             reject("This is odd number")
//         }
//     }
//     number()
// })
// myPromise
//     .then(function (success) {
//         console.log("This Number is Even Good! ", success);
//     })
//     .catch(function (error) {
//         console.error(error);
//     })

// *******************************____callBackFunction_____********************************


// function result() {
//     let num1 = 2;
//     let num2 = 6;
//     if (num1 === 2 && num2 === 6) {
//         change1()
//     } else {
//         change2()
//     }
// }

// _________________________change1

// function change1() {
//     console.log("Your Answer Currect");
// }

// _________________________change2

// function change2() {
//     console.log("Sorry!");
// }
// result();