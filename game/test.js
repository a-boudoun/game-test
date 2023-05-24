// const First = {
//   name: "first",
//   last: "second",
// }
// const {name:ll, last:ee} = First;
// console.log(ll);
var gree = function (name, callback) {
    console.log("Hello, " + name + "!");
    callback();
};
var sayGoodbye = function () {
    console.log("Goodbye!");
};
gree("Alice", sayGoodbye);
