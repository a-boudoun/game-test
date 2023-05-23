// const First = {
//   name: "first",
//   last: "second",
// }
// const {name:ll, last:ee} = First;
// console.log(ll);
const gree = (name, callback) => {
  console.log("Hello, " + name + "!");
  callback();
}

const sayGoodbye = () => {
  console.log("Goodbye!");
}

gree("Alice", sayGoodbye); 