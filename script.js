console.log('Hello!');

const arr = [1, 2, 3, 2, 2, 4, 5, 1, 4];
const filteredArr = arr.filter((ele, i) => i === arr.indexOf(ele));
console.log(filteredArr);

const arr2 = [3, 3, 4, 5, 6, 6, 7, 8, 9];

const newArr = arr2.filter((ele, index) => index === arr2.indexOf(ele));
console.log(newArr);
