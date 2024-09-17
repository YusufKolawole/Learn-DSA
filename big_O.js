const nemo = ["nemo"];
const everyone = [
    'dory', 'bruce', 'marlin',
    'nemo', 'gill', 'bloat', 'nigel',
    'squirt', 'darla', 'hank'
]
const large = new Array(1000).fill('nemo');
function findNemo(array){
    for(let i = 0; i < array.length; i++){
        console.log('running');
        if(array[i] === "nemo"){
           console.log('Found NEMO!');
      }

  }  
}

findNemo(nemo);
//findNemo(large); // O(n) ----> Linear Time

// const boxes = [0, 1, 2, 3, 4, 5]
// function logFirstTwoBox(boxes){
//     console.log(boxes[0]); //O(1) O(1) constant Time OPeration
//     console.log(boxes[1]); //O(1) O(1) constant Time OPeration
// }

// logFirstTwoBox(boxes) // O(2)

// What is the Big O of the below function? (Hint, you may want to go line by line)
function funChallenge(input) {
    let a = 10;
    a = 50 + 3;
  
    for (let i = 0; i < input.length; i++) {
      anotherFunction();
      let stranger = true;
      a++;
    }
    return a;
  }