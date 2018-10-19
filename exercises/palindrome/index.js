// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// function palindrome(str) {

//     let reversed  = str.split('').reverse().join('')

//     if (reversed === str) {
//         return true
//     }
//     else {
//         return false
//     }
// }


// Loops through the array, checking first with last, continuing on respectively.
// This solution is not the most efficient b/c we only need to loop
// till the middle of the array. This is iterating through the entire array.
// Make sure to tell this in the interview 
const palindrome = (str) => {

    strArr = str.split('')

    return strArr.every( (char, index, arr) => {
        return char === arr[arr.length - index -1]
    })

}

// palindrome('abba')

module.exports = palindrome;
