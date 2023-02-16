
// 2. 

const maxOfThree = function(x, y, z) {
    let max = x;

    if (y > max) {
        max = y;
    } 
    if (z > max) {
        max = z;
    }
     
    return max;
}

console.log("The max of 3, 2, and 10 is "  + maxOfThree(3, 2, 10));

// 3. 
function isCharAVowel(ch) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    for (let i = 0; i < vowels.length; i++) {
        if (ch === vowels[i]) return true;
    }
    return false;
}

console.log("'a' is a vowel: " + isCharAVowel('a'));
console.log("'b' is a vowel: " + isCharAVowel('b'));

// 4.
const sumArray = function(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log("The sum of the values in [7, 23, 9, 44, 16] is " + sumArray([7, 23, 9, 44, 16]));

// 6.
const numArgs = function() {
    return arguments.length;
}

console.log("numArgs(33, 47, 24, 23, 11) has " + numArgs(33, 47, 24, 23, 11) + " args");
console.log("numArgs(4, 77, 24, 23, 11, 28, 17) has " + numArgs(4, 77, 24, 23, 11, 28, 17) + " args");

// 7.
function reverseString(str) {
    let newStr = "";
 
    for (var i = str.length - 1; i >= 0; i--) { 
        newStr += str[i]; 
    }

    return newStr;
}

console.log("The reverse of \"rockstar\" is " + reverseString("rockstar"));