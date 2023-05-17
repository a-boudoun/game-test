const HIGH_TEMPERATURES = {
	yesterday: 75,
	today: 77,
	tomorrow: 80
  };
    
  const {todaay, tomoarrow, yesterday} = HIGH_TEMPERATURES;
  console.log("today:", todaay);
  console.log("tomorrow:", tomoarrow);
  console.log("yesterday:", yesterday);

function removeFirstTwo(list) {
  // Only change code below this line
  const [,,...shorterList] = list; // Change this line

  // Only change code above this line
  return shorterList;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);
console.log(sourceWithoutFirstTwo);