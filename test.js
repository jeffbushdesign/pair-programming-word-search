let word = 'AS';
let letters = [
  ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
  ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D']
];

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
console.log('original array:', letters);
console.log('transposed array: ', transpose(letters));

const verticalJoin = trans.map(ls => ls.join(''));
for (const line of verticalJoin) {
  if (line.includes(word)) {
    // return true;
    console.log(true);
  }
  // if false was here they it would only test 1 line, we need to test all the lines
}
// return false;
console.log(false);
// for (line of verticalJoin) {
//   if (line.includes(word)) {
//     return true;
//   }
//   // if false was here they it would only test 1 line, we need to test all the lines
// }
// return false;
// console.log(verticalJoin);

// console.log(resultArr);

// letters has a separate array for each line
// join all the items in each sub-array
// now there are just 9 single-element arrays



// const flat = trans.flat();
// console.log(flat);
// for (const item of trans) {
//   item.join('');
// }
// console.log(trans);

// }
// const joined = trans.join('');
// console.log(joined);
