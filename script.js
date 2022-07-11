console.log('Hello!');

const arr = [1, 2, 3, 2, 2, 4, 5, 1, 4];
const filteredArr = arr.filter((ele, i) => i === arr.indexOf(ele));
console.log(filteredArr);
