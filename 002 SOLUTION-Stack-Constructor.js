class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(value) {
    const newNode = new Node(value);
    this.top = newNode;
    this.length = 1;
  }

  printStack() {
    let temp = this.top;
    while (temp !== null) {
      console.log(temp.value);
      temp = temp.next;
    }
  }

  getTop() {
    if (this.top === null) {
      console.log("Top: null");
    } else {
      console.log("Top: " + this.top.value);
    }
  }

  getLength() {
    console.log("Length: " + this.length);
  }
  push (value) {
    const newNode = new Node (value)
    if(this.length === 0) {
        this.top = newNode
    }   else {
        newNode.next = this.top
        this.top = newNode
    }
    this.length++
    return this
  }

  pop() {
    if (this.length === 0) {
        return undefined
    } else {
        let temp = this.top
        this.top = this.top.next
        temp.next = null
    }
    this.length--
    return temp
  }
}

function test() {
  let myStack = new Stack(4);

  myStack.getTop();
  myStack.getLength();

  console.log("\nStack:");
  myStack.printStack();
}

test();

/*
    EXPECTED OUTPUT:
    ----------------
    Top: 4
    Length: 1

    Stack:
    4

*/
