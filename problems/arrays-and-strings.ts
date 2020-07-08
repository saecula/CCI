/*
Implement a method to perform basic string compression using the counts of repeated characters.
For example:
'aabcccccaaa' --> 'a2b1c5a3'
*/

const compress = (str) => {
  const resArr = [];
  let acc = 0;
  let currLetter = str[0];

  for (let depth = 0; depth < str.length; ++depth) {
    if (str[depth] === currLetter) {
      acc++;
    } else {
      resArr.push(currLetter, acc);
      currLetter = str[depth];
      acc = 1;
    }
  }
  resArr.push(currLetter, acc);
  return resArr.length > str.length ? str : resArr.join('');
};

/*
rotate matrix 90 degrees
*/

const rotate = (matrix) => {
  const half = matrix.length / 2;
  const len = matrix.length - 1;

  const swap = (c1, c2) => {
    const [a, b] = c1;
    const [c, d] = c2;
    let temp = matrix[a][b];
    matrix[a][b] = matrix[c][d];
    matrix[c][d] = temp;
  };

  for (let depth = 0; depth < half; ++depth) {
    for (let j = depth; j < len - depth; ++j) {
      const corner1 = [depth, j];
      const corner2 = [j, len - depth];
      const corner3 = [len - depth, len - j];
      const corner4 = [len - j, depth];
      swap(corner1, corner2);
      swap(corner1, corner4);
      swap(corner4, corner3);
    }
  }
  return matrix;
};

const myMatrix = [
  [1, 1, 1, 1, 1, 2],
  [4, 5, 5, 5, 5, 2],
  [4, 3, 3, 3, 3, 2],
  [4, 8, 8, 8, 8, 2],
  [4, 9, 9, 9, 9, 2],
  [4, 2, 2, 2, 2, 2],
];

console.log(rotate(rotate(myMatrix)));

/*
zero matrix: set whole row and column to zero of any element that is zero
*/

const zeroMatrix = (matrix) => {};
