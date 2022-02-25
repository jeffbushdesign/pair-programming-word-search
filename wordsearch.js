const wordSearch = (letters, word) => {

    // if the letters matrix is not an empty array
    if (typeof letters !== 'undefined' && letters.length === 0) {
        // the array is defined and has no elements
        return undefined;
    } else {
        // Get array ready for horizontal inspection
        // letters has a separate array for each line
        // join all the items in each sub-array
        // now there are just 9 single-element arrays
        const horizontalJoin = letters.map(ls => ls.join(''));

        // get array ready for vertical inspection
        // transpose the entire array
        const transpose = function (matrix) {
            let resultArr = [];
            for (let i = 0; i < matrix[0].length; i++) {
                let rows = [];
                for (let j = 0; j < matrix.length; j++) {
                    rows.push(matrix[j][i]);
                }
                resultArr.push(rows);
            }
            return resultArr;
            // console.log(resultArr);
        };
        const trans = transpose(letters);
        // console.log('original array:', letters);
        // console.log('transposed array: ', transpose(letters));

        // take each sub array and convert it into a single string
        const verticalJoin = trans.map(ls => ls.join(''));

        // After getting everything ready, look for the word
        for (line of horizontalJoin) {
            if (line.includes(word)) {
                return true;
            }
            // if false was here they it would only test 1 line, we need to test all the lines
        }
        for (const line of verticalJoin) {
            if (line.includes(word)) {
                return true;
                // console.log(true);
            }
        }

        // after you're done looping through all the lines if you still haven't found the word then return false
        return false;
    }
};

module.exports = wordSearch;

    // What if the word is written vertically, not horizontally?
    // What about the case where the word matrix is an empty array?
    // You'll have to write tests for these cases (and any others that you think of), (You might also have to modify the wordSearch function to make those new tests pass)


