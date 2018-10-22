// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


// loop through string
// store each char in obj as key, and count as the value. convert char to lowercase
// do that for both strings
// then compare the objects keys and values and see if they are equal to eachother. use for in

/*
function anagrams(stringA, stringB) {

    let objA = {}
    let objB = {}
    let isEqual = true
    stringA = stringA.toLowerCase()
    stringB = stringB.toLowerCase()

    for (char of stringA) {
        if(/^[a-zA-Z]$/.test(char)){
            if (!objA[char]) {
                objA[char] = 1
            }
            else {
                objA[char] ++
            }
        }
    }

    for (char of stringB) {
        if(/^[a-zA-Z]$/.test(char)){
            if (!objB[char]) {
                objB[char] = 1
            }
            else {
                objB[char] ++
            }
        }
        // if(/^[a-zA-Z]$/.test(char)){
        //     objB[char.toLowerCase()] = objB[char.toLowerCase()] ++ || 1
        // }
    }

    if (Object.keys(objA).length != Object.keys(objB).length) {
       return isEqual = false
    }

    for (key in objA) {
        if (objA.hasOwnProperty(key)) {
            if(objA[key] !== objB[key]) {
                return isEqual = false
            }
        }
    }

    return isEqual
}
*/

/*
const anagrams = (stringA, stringB) => {

    stringA = stringA.replace(/[^\w]/g, '').toLowerCase()
    stringB = stringB.replace(/[^\w]/g, '').toLowerCase()
    let objA = {}
    let objB = {}
    let isEqual = true


    for (char of stringA) {
        if (!objA[char]) {
            objA[char] = 1
        }
        else {
            objA[char] ++
        }
    }

    for (char of stringB) {
        if (!objB[char]) {
            objB[char] = 1
        }
        else {
            objB[char] ++
        }
    }

    if (Object.keys(objA).length != Object.keys(objB).length) {
        return isEqual = false
     }
 
     for (key in objA) {
         if (objA.hasOwnProperty(key)) {
             if(objA[key] !== objB[key]) {
                 return isEqual = false
             }
         }
     }
 
     return isEqual
}
*/


const anagrams = (stringA, stringB) => {
    
    // you can also create a function to clean up the string, and return it
    // ^ inside [] means 'not'
    stringA = stringA.replace(/[^\w]/g, '').toLowerCase()
    stringB = stringB.replace(/[^\w]/g, '').toLowerCase()

    stringA = stringA.split('').sort().join('')
    stringB = stringB.split('').sort().join('')

    if (stringA !== stringB) {
        return false
    }

    return true


}

anagrams('Whoa!    Hi!', 'Hi!   Whoa!')

module.exports = anagrams;
