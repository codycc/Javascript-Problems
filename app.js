//CLOSURE EXAMPLE  OUTPUT BEING 3 , 3 , 3
// function buildFunctions() {
//     var arr = [];
//     for (var i = 0; i < 3 ; i ++) {
//       arr.push(
//         function() {
//           console.log(i);
//         }
//       )
//     }
//     return arr;
// }
//
// var fs = buildFunctions();
// fs[0]();
// fs[1]();
// fs[2]();
//
//
// // CLOSURE EXAMPLE BY STORING J , OUTPUT BEING 0 , 1, 2
//
// function buildFunctions2() {
//     var arr = [];
//     for (var i = 0; i < 3 ; i ++) {
//       arr.push(
//         (function(j) {
//           return function() {
//             console.log(j);
//           }
//         }(i))
//       )
//     }
//     return arr;
// }
//
// var fs2 = buildFunctions2();
// fs2[0]();
// fs2[1]();
// fs2[2]();


// FUNCTION FACTORIES
// function makeGreeting(language) {
//   return function(firstname, lastname) {
//     if (language === 'en') {
//       console.log('Hello ' + firstname + ' ' + lastname)
//     }
//     if (language === 'es') {
//       console.log('Hola ' + firstname + ' ' + lastname)
//     }
//   }
// }
//
// var english = makeGreeting('en');
// var spanish = makeGreeting('es');
//
// english('Cody','Condon')
// spanish('Cody','Condon')


//CLOSURES AND CALLBACKS

// function sayHiLater() {
//   var greeting = "Hi!";
//
//   setTimeout(function() {
//     console.log(greeting);
//   }, 3000)
// }
//
// sayHiLater();

//jQuery uses function expressions and first-class functions!
//$('button').click(function() {

//});
//
//
//
// function tellMeWhenDone(callback) {
//
//   var a = 1000; // some work
//   var b = 2000; // some work
//
//   callback(); // the 'callback', it runs the funciton I give it!
// }
//
// tellMeWhenDone(function() {
//     console.log('I am Done')
// });


//CALL APPLY BIND

// var person = {
//   firstname: 'john',
//   lastname: 'doe',
//   getFullName: function() {
//     var fullname = this.firstname + ' ' + this.lastname;
//     return fullname;
//   }
// }
//
// var logName = function( lang1, lang2) {
//
//   console.log('Logged: ' + this.getFullName());
//   console.log('Arguments: ' + lang1 +lang2);
//   console.log('--------');
// }
//
// var logPersonName = logName.bind(person);
//
// logPersonName('en');
//
// logName.call(person, 'en','es');
// logName.apply(person, ['en', 'es']);
// //APPLY METHOD NEEDS AN ARRAY FOR PARAMETERS WHERE CALL DOESNT
//
//
//
// // FUNCTION BORROWING
// var person2 = {
// firstname: 'jane',
// lastname: 'doe'
// }
//
// console.log (person.getFullName.apply(person2));
//
// //FUNCTION currying
// function multiply(a,b){
//   return a*b;
// }
// var multipleByTwo = multiply.bind(this,2);
// console.log(multipleByTwo(3));

//FUNCTIONAL PROGRAMMING
// function mapForEach(arr, fn) {
//   var newArr = [];
//   for (var i = 0; i < arr1.length; i++) {
//     newArr.push(
//       fn(arr[i])
//     )
//   };
//   return newArr;
// }
//
// var arr1 = [1,2,3];
// console.log(arr1);
//
// var arr2 = []
// for (var i = 0; i < arr1.length; i++) {
//   arr2.push(arr1[i] *2 )
// }
//
// var arr2 = mapForEach(arr1, function(item){
//   return item * 2;
// })
// console.log(arr2);
//
// var arr3 = mapForEach(arr1, function(item){
//   return item > 2;
// })
// console.log(arr3);
//
// var checkPastLimit = function(limiter, item) {
//   return item > limiter;
// }
//
// var arr4 = mapForEach(arr1, checkPastLimit.bind(this, 1 ));
// console.log(arr4);
//
// var checkPastLimitSimplified = function(limiter) {
//   return function(limiter, item) {
//     return item > limiter;
//   }.bind(this,limiter);
// };
//
// var arr5 = mapForEach(arr1,checkPastLimitSimplified(2));
// console.log(arr5);
