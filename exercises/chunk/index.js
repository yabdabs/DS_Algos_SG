// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// calculate how many sub arrays you will have. in the parent array. Round up
// while sub count < num of sub arrays
    // take size elements from array and push to subArray
    // push sub array into parent array
//done

function chunk(array, size) {

    let parentArr = []
    // how many sub arrays will be in the parent array
    let numberOfSubArrays = Math.ceil(array.length / size)
    //to keep track of the current sub array, until it reaches numberOfSubArrays
    let subCount = 0

    while (subCount < numberOfSubArrays) {
        let removed = array.splice(0,size)
        parentArr.push(removed)
        subCount++
    }

    return parentArr

}

/*
const chunk = (array, size) => {

    let chunk = []
    let index = 0

    while (index < array.length) {
        chunk.push(array.slice(index, index + size))
        index = index + size
    }

    return chunk
}
*/

// chunk([1, 2, 3, 4], 2)
// chunk([1, 2, 3, 4, 5], 10)

module.exports = chunk;
