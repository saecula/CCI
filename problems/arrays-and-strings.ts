/*
Implement a method to perform basic string compression using the counts of repeated characters.
For example:
'aabcccccaaa' --> 'a2b1c5a3'
*/

const compress = (str) => {
  const resArr = [];
  let acc = 0;
  let currLetter = str[0];

  for (let i = 0; i < str.length; ++i) {
    if (str[i] === currLetter) {
      acc++;
    } else {
      resArr.push(currLetter, acc);
      currLetter = str[i];
      acc = 1;
    }
  }
  resArr.push(currLetter, acc);
  return resArr.length > str.length ? str : resArr.join('');
};
