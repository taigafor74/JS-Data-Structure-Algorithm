function Stack() {
  this.items = [];

  this.push = function (item) {
    this.items.push(item);
  };
  Stack.prototype.pop = function () {
    return this.items.pop();
  };
  Stack.prototype.peek = function () {
    return this.items[this.items.length - 1];
  };
  Stack.prototype.isEmpty = function () {
    return this.items.length == 0;
  };
  Stack.prototype.size = function () {
    return this.items.length;
  };
  Stack.prototype.toString = function () {
    return this.items.join(" ");
  };
  Stack.prototype.toBinary = function (item) {
    while (item >= 1) {
      let i = item % 2;
      item = item / 2;
      this.items.push(Math.floor(i));
    }
    return this.items.reverse().join("");
  };
}
function toBinary(item) {
  const stack = new Stack();
  let str = "";
  while (item > 0) {
    stack.push(item % 2);
    item = Math.floor(item / 2);
  }
  while (!stack.isEmpty()) {
    str += stack.pop();
  }
  return str;
}
console.log(toBinary(100));
