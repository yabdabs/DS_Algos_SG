// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {

    let arr = str.split(' ').map( (word, i) => {
        return word.replace(word.substring(0,1), word.substring(0,1).toUpperCase())
    })

    // console.log(arr.join(' '))
    return arr.join(' ')

}


/*
const capitalize = (str) => {

    let word = str[0].toUpperCase()

    for (let i = 1; i < str.length; i++) {
        if (str[i-1] === ' ') {
            word += str[i].toUpperCase()
        }
        else{
            word += str[i]
        }
    }

    return word

}
*/

capitalize('this is how we do')

module.exports = capitalize;
