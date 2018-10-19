// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

/*
function reverse(str) {

    let reversed = ''

    for ( char of str) {
        reversed = char + reversed
    }

    return reversed

}
*/

// const reverse = (str) => str.split('').reverse().join('')

const reverse = (str) => {

    return str.split('').reduce( (reverse, char) => {
        return char + reverse
    }, '')

}

module.exports = reverse;
