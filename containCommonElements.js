// Given 2 arrays, create a function that
//  let a user know (true/false) whether
// these two arrays contain any common items
// For Example:
// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'i'];
//should return false;
//------------------------------------
// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'x'];
// should return true

// 2 parameters - arrays - no size limit
// return true or false

// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'i'];
//should return false;

// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'x'];
// should return true

// function containCommonElement(arr1, arr2){
//     for (let i = 0; i < arr1.length; i++){
//         for (let j = 0; j < arr2.length; j++ ){
//             if(arr1[i] === arr2[j]){
//                 return true
//             }
//         }
//     }
//     return false;
// }
// This is not an efficient solution to this problem, it's O(a * b) but it seems like
// O(n^2) but since the array element is not of the same length it is O(a *b)

// const result =  containCommonElement(array1, array2);
// console.log(result);

////-------This is for the efficience solution using hashmap
// step 1 convert array1 to object i.e hashmap
//array1 ====> obj {
// a: true,
// b: true,
// c: true,
// d: true
//}
//array2[index] === obj.properties

function containCommonElement(arr1, arr2){
    //loop through arr1 and create object
    // where every of the properties is the arr1 element and the value is true
    // loop through second array and check if element in second array exists on 
    // created object
}

const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'a'];

// function containsCommonElement2(array1, array2){
//     // loop through first array and create object
//     // where properties === items in tha array
//     let map = {};
//     for(let i = 0; i < array1.length; i++){
//         if(!map[array1[i]]){
//             const item = array1[i];
//             map[item] = true;
//         }
//     }
//     // loop through second array and check if item 
//     // in second array exists on created object.

//     for (let j= 0; j< array2.length; j++){
//         if (map[array2[j]]){
//             return true;
//         }
//     }

//     return false;
// }
// result = containsCommonElement2(array1,array2);
// console.log(result);
// O(a + b); Time Complexity

//trying to write this in a cleaner manner,this refactor based on how much you 
//know your language adopted for the exercise
//So array should be practice perfectly when having an interview
//you'll notice this code is so clear using javaScript built in array method
function containCommonElement3(array1, array2){
    return array1.some((item) => array2.includes(item));
}
console.log(containCommonElement3(array1, array2));

const array = [1,2,3, 4, 5];
const even = (element) => element % 2 === 0;
console.log(array.some(even));

const arrayinc = [1, 2, 3];
console.log(arrayinc.includes(3));
