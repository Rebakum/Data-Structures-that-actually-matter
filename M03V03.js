class Stack {
  constructor() {
    this.items = [];
  }
  //*0(1)
  push(value) {
    this.items.push(value);
  }
  //*0(1)
  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items.pop();
  }
  //*(0(1))
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.items.length - 1];
  }
  //*0(1)
  isEmpty() {
    return this.items.length === 0;
  }
  //*0(n)
  print() {
    console.log("Value:", this.items.slice().reverse().join("->"));
  }
}
const stack = new Stack();
console.log("peek:", stack.peek());
console.log("Is Empty:", stack.isEmpty());
stack.push(10);
stack.push(20);
stack.push(30);
stack.print();
console.log("Peek2:", stack.peek());
console.log("pop:", stack.pop());
console.log("pop:", stack.pop());
console.log("pop:", stack.pop());
console.log("pop:", stack.pop());
//output
// peek: undefined
// Is Empty: true
// Value: 30->20->10
// Peek2: 30
// pop: 30
// pop: 20
// pop: 10
// pop: undefined
