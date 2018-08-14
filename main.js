


/*
QUESTIONS
CAN YOU CHECK IF YOU CAN MAKE A WORD FROM WORDS IN AN ARRAY
*/

// var  wordsArray = ["one", "cat", "two", "four"]
// var target = "fouroneone";
// target = target.split('');
// console.log('target', target);
//
// target.forEach(function(letter) {
//   console.log(letter);
//     wordsArray.forEach(function(word) {
//     console.log(word);
//         if(target.includes(element)) {
//             console.log('item is included');
//         }
//   });
// });

//////////////////////////////////////////////////////////







/*
QUESTIONS
TAKE A NUMBER AND CONVERT IT INTO THE BIGGEST NUMBER IT CAN BE
*/

// bigNumber = (num) => {
//     let newNumArray= num.split("");
//     newNumArray.sort().reverse();
// }
//
// bigNumber("2368");
// for(var i=0; i < data.length; i++ ){
//
//  }

////////////////////////////////////////////////////////// OUTPUT 8632




/*
QUESTIONS
FIND THE SUB ARRAY OF AN ARRAY
*/


// var main = [1,2,4,5,6];
// var maxSequence= function (arr){
// console.log('start');
//     let greatSum = 0;
//     let currSum = 0;
//
//     for(let i = 0; i < arr.length; i++){
//
//         if(greatSum < arr[i]  + currSum){
//             currSum = currSum + arr[i];
//             greatSum =currSum;
//
//
//         }else if(greatSum < arr[i]) {
//             greatSum = arr[i];
//
//
//         }else{
//             currSum =currSum + arr[i] > 0 ? currSum + arr[i] : 0 ;
//             if(greatSum < currSum){
//                 greatSum =currSum;
//             }
//         }
//         console.log('greatSum', greatSum);
//         return greatSum
//     }
// }
// maxSequence(main);

////////////////////////////////////////////////////////// OUTPUT 8632



/*
QUESTIONS
HOW WOULD YOU DELETE ITEMS FROM AN OBJECT
*/

// How would you delete a property from an object
// function removeProperty(obj, prop) {
//     if(obj.prop){
//         console.log('here');
//         delete obj.prop;
//         console.log('obj',obj);
//         return true
//     }else{
// console.log('here2');
//         return false;
//     }
// }
//
// removeProperty({prop:'stephen'}, 'prop');

////////////////////////////////////////////////////////// OUTPUT 8632







/*
QUESTIONS
GET THE ANGLE OF A CLOCK
*/

// function getClockAngle(hours, minutes, isPortionWithTwelve) { // using 12-hour OR 24-hour clock notation
//
//     // Modulus is required to ensure we start from 12 everytime.
//     hours = hours % 12;
//     console.log("hours", hours);
//
//
//     // HourMinPart calculates how much the extra minutes is represented in the second hand moving away from the last hour mark
//     var hourMinPart = 0.5 * minutes, // 30 degrees per 60 minutes => 1/2 degree per 1 minute => 0.5 * minute
//
//         hourHourPart = 30 * hours, // 30 degrees per 1 hour => 30 * hour
//
//         minAngle = 6 * minutes, // 360 degrees per 60 minutes => 6 degrees per 1 minute => 6 * minute
//
//         totalAngle = Math.abs(hourMinPart + hourHourPart - minAngle); // absolute difference
//
//     console.log('hourMinPart:  0.5 *  ' +  minutes   +  "  = " +  hourMinPart);
//     console.log('hourHourPart   30 *  ' +  hours   +  "  = " +  hourHourPart);
//     console.log('minAngle 6 *  ' +  minutes   +  "  = " +  minAngle );
//
//     var sum = hourMinPart + hourHourPart;
//     console.log('hourMinPart + hourHourPart =  ', hourMinPart + hourHourPart);
//     console.log('Sum - minAngle  =  ',  minAngle - sum );
//
//
//
//     return isPortionWithTwelve ? 360 - totalAngle : totalAngle; // subtract the total angle from 360 to get the portion w/ 12
//
// }
//
// // Examples
// // console.log("4:42", getClockAngle(4, 42)); // 111 degrees
// console.log("4:42", getClockAngle(4,42, true)); // 249 degrees
// console.log("4:42", getClockAngle(4,42 , true)); // 324.5 degrees
// // console.log("12:01", getClockAngle(12, 01)); // 5.5 degrees
// // console.log("12:00", getClockAngle(12, 00)); // 0 degrees
// // console.log("00:01", getClockAngle(00, 01)); // 5.5 degrees
// // console.log("24:01", getClockAngle(24, 01)); // 5.5 degrees
// // console.log("16:42", getClockAngle(16, 42)); // 111 degrees
// // console.log("11:01", getClockAngle(11, 01)); // 324.5 degrees
//
// console.log("4:42", getClockAngle(4,42)); // 324.5 degrees

////////////////////////////////////////////////////////// OUTPUT 8632



/*
PROMISES VERSUS OBSERVABLES Rx
*/


// import Rx from 'rxjs/Rx';
// console.log(Rx.Observable.of(1, 2, 3));
// var promise = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve(42);
//
//     },500);
//     console.log('promise has started');
// });
// promise.then(x => console.log("here", x));
//
//
// // BASIC OBSERABLE
//
// var source = Rx.Observable.create((observer) =>{
//     var id  = setTimeout(() => {
//         console.log('obserable timout hit ');
//         observer.onNext(42);
//     }, 1000);
// console.log('obserable');
//
// });




// function LetterChanges(str) {
//     let alphabetArray = ("abcdefghijklmnopqrstuvwxyz").split("");
//     let wordArray = str.split("");
//     let newArray = [];
//     let setUpperCase = [];
//     let exceptArray =[];
//     let voals = ['a','e','i','o','u'];
//
//     wordArray.forEach(function(char){
//         let indexValue = alphabetArray.indexOf(char);
//
//
//         if(char === " "  ){
//             let indexValue = wordArray.indexOf(char);
//             newArray[indexValue] = ' ';
//
//         }else if (indexValue < 0){
//
//             exceptArray.push(char);
//         } else{
//              let newletter =alphabetArray[indexValue + 1];
//              newArray.push(newletter);
//         }
//
//
//     })
//
//     newArray.forEach(function(element) {
//         var indexVowel = voals.indexOf(element);
//         if(indexVowel  > 0){
//             setUpperCase.push(element.toUpperCase());
//         }else{
//             setUpperCase.push(element.toLowerCase());
//         }
//     });
//     str = setUpperCase.concat(exceptArray).join().replace(/[,]/g, "");
//
//
//     return str;
//
// }
//
// LetterChanges("hello*3");



// function FirstFactorial(num) {
//     num  = num + 1;
//     let totalAmount;
//     var array = [];
//
//     for(var i=0; i < num; i++ ) {
//         array.push(i);
//     }
//     array.reverse().pop();
//
//     totalAmount =array.reduce(function (sum, item) {
//         return sum * item;
//     });
//     return totalAmount;
// }
//
// FirstFactorial(4);
// FirstFactorial(8);



// function checkPalindrome(str) {
//     console.log('main ' + str.toLowerCase() + " reverse ", str.toLowerCase().split('').reverse().join('') )
//     return str.toLowerCase() == str.toLowerCase().split('').reverse().join('');
// }
//
// console.log('Madam is a palindrome:'+ checkPalindrome('madam'))
// console.log('sir is a palindrome:'+ checkPalindrome('sir'))
// console.log('Maam is a palindrome:'+ checkPalindrome('Maam'))







// var fullname = 'John Doe';
// var obj = {
//     fullname: 'Colin Ihrig',
//     prop: {
//         fullname: 'Aurelio De Rosa',
//         getFullname: function() {
//             return this.fullname;
//         }
//     }
// };
//
// console.log(obj.prop.getFullname());
//
// var test = obj.prop.getFullname;
//
// console.log(test());



// function solution(A) {
//     var n = A.length;
//     var L = new Array(n + 1);
//     L[0] = -1;
//
//     for (let i = 0; i < n; i++) {
//         L[i + 1] = A[i];
//     }
//     var count = 0;
//     var pos = Math.floor((n + 1) / 2);
//     candidate = L[pos];
//     for (let i = 1; i <= n; i++) {
//         if (L[i] == candidate)
//             count = count + 1;
//     }
//     if (count > pos)
//         return candidate;
//     return (-1);
//
// }
//
// let array = [2,2,2,2,2,3,4,4,4,6];
// let array2 = [1, 1, 1, 1, 50];
// let array3 = [3, 3, 3, 3, 50];
// let array4 = [100, 100, 100, 100, 50];
// console.log("solution(array);" , solution(array));









// var array1 =[1, 3, 6, 4, 1, 2];
// var array2 =[1, 2, 3];
// var array3 =[-1,-3];
//
//
// function solution(A) {
//
//     var result;
//     var count = A.length;
//     A = A.sort();
//     A = A.filter(function(item, index){
//         return A.indexOf(item) >= index;
//     });
//     for(var i = 1; i < A.length; i++) {
//         if(A[i] - A[i-1] < 0){
//             return 1 ;
//         }
//         else if(A[i] - A[i-1] != 1 ) {
//             result = i + 1;
//         }else if( i+1 == A.length){
//             result = A.length++;
//         }
//    }
//    return result;
// }
//
//  solution(array1);
//
// console.log('result',  solution(array1));
// console.log('result',  solution(array2));
// console.log('result',  solution(array3));



//
// var BaseArray =[1, 3, 6, 4, 1, 2];
// var array2 =[1, 2, 3];
// var array3 =[-1,-3];
//
//
// console.log(solution());
// function solution(A) {
//     var IsDuplicate = false;
//     var OnlyOneNumber = 0;
//
//     for (var Bidx in BaseArray)
//     {
//         IsDuplicate = false;
//         for (var Checkidx in BaseArray)
//         {
//             if (BaseArray[Bidx] == BaseArray[Checkidx])
//             {
//                 IsDuplicate = true;
//                 break;
//             }
//         }
//
//         if(IsDuplicate == false)
//         {
//             OnlyOneNumber = BaseArray[Bidx];
//         }
//     }
// }



// PROMISES
// function runCycle() {
//     return new promise(function (resolve, reject) {
//         resolve = "test";
//
//     })
//
// }
//
// runCycle().then(function (resolve, reject) {
//     console.log('data', resolve);
//
// })



// LONGEST WORD
// function LongestWord(sen) {
//     var counterArray = [] ;
//     var stringArray = sen.split(" ");
//     var newStringArray = [];
//     var cleanArray = [];
//
//     stringArray.forEach(function(item) {
//         item =item.replace(/[^a-z0-9]/gi,'')
//          cleanArray.push(item);
//          newStringArray = item.split("");
//          counterArray.push(newStringArray.length);
//     });
//     var index = indexOfMax(counterArray);
//
//     sen = cleanArray[index];
//     return sen;
// }
//
// function indexOfMax(arr) {
//     if (arr.length === 0) {
//         return -1;}
//     var max = arr[0];
//     var maxIndex = 0;
//
//     for (var i = 1; i < arr.length; i++) {
//         if (arr[i] > max) {
//             maxIndex = i;
//             max = arr[i];
//         }
//     }
//     return maxIndex;
// }
// console.log(LongestWord("too none"));
// LONGEST WORD END






// ROTATING AN ARRAY
// function solution(A, K) {
//     var arrayLength = A.length;
//     console.log('arrayLength',arrayLength);
//     var array = A;
//
//     console.log(A, K);
//
//     for(var i=0; i < K; i++ ){
//         console.log('A', array[A.length -1]);
//         A.unshift(array[A.length -1]);
//         A.pop();
//         console.log('A', A);
//      }
//      return A
// }
//
// A = [3, 8, 9, 7, 6]
// K = 3;
// solution(A,K)




// MY FROG JUMP
// function solution(X, Y, D) {
//     var counter = X ;
//     while(counter < Y ){
//        counter=  counter + 30;
//        console.log('counter', counter);
//     }
// }
//
// solution(10, 85, 30);


// you can use console.log for debugging purposes, i.e.
// console.log('this is a debug message');

// function solution(X, Y, D) {
//     // write your code in JavaScript (Node.js)
//     var distance = Y - X;
//     if ((distance % D) === 0){
//         return distance / D;
//     }else{
//         return (parseInt(distance / D) + 1);
//     }
// }





// function solution(U, N) {
//
//     { id: 123132,
//         gender: "FEMALE"
//     }
//
//     return new Promise((resolve, reject) => {
//
//         var gender = "male";
//         getTopBrandsForGender(gender)
//
//         resolve =gender ;
//
//     });
// }
//
//
// solution().then(function (data) {
//     console.log('data', data);
//
// })






