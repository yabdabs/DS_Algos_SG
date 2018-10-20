// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

/*
function maxChar(str) {

    // create  an object with key as letter, and value as the count for that letter
    let obj =  {}
    let max = 0
    let char

    // loop through the string
    for( let i = 0; i < str.length; i++) {

        if (!obj[str.charAt(i)]) {
            obj[str.charAt(i)] = 1
        }
        else {
            obj[str.charAt(i)] ++
        }

    }

    console.log(obj)

    for (let key in obj) {
        if(obj.hasOwnProperty(key)) {
            console.log('OBJ,KEY', obj[key])
            if (obj[key] > max) {
                max = obj[key]
                char = key
            }
        }
    }
    console.log(char)
    return char

}
*/

function maxChar(str) {

    // create  an object with key as letter, and value as the count for that letter
    let obj =  {}
    let max = 0
    let char

    // loop through the string
    for ( char of str) {
        obj[char] = obj[char] ++ || 1
    }

    console.log(obj)

    for (let key in obj) {
        if(obj.hasOwnProperty(key)) {
            console.log('OBJ,KEY', obj[key])
            if (obj[key] > max) {
                max = obj[key]
                char = key
            }
        }
    }
    console.log(char)
    return char

}

maxChar('a')


module.exports = maxChar;
