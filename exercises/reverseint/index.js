// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

/*
function reverseInt(n) {

    let strNum = n.toString().split('').reverse().join('')

    if (n < 0) {
        return parseInt(strNum) * -1
    }

    return parseInt(strNum)

}
*/

const reverseInt = (n) => {

    let reverse = n.toString().split('').reverse().join('')

    return parseInt(reverse) * Math.sign(n)

}

module.exports = reverseInt;
