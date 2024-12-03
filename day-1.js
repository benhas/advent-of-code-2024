const { readFileAndPopulateLists } = require('./utils.js');
function sumSortedLists(list1, list2) {
  // Sort both lists
  list1.sort((a, b) => a - b);
  list2.sort((a, b) => a - b);

  // Initialize the sum variable
  let sum = 0;

  // Iterate through the lists and sum the corresponding elements
  for (let i = 0; i < list1.length; i++) {
    sum += Math.abs(list1[i] - list2[i]);
    console.log(`adding ${list1[i]} + ${list2[i]} = ${sum}`);
}

  return sum;
}

module.exports = { sumSortedLists };

const list1 = readFileAndPopulateLists('./files/day-1-lists.txt').firstList;
const list2 = readFileAndPopulateLists('./files/day-1-lists.txt').secondList;
console.log(sumSortedLists(list1,list2));