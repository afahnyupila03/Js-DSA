class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

// key take away.
// when adding to a BST, if the new node is greater that the parent node,
// it goes to the right of the parent node and vice-versa

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let temp = this.root;
    while (true) {
      if (newNode.value === temp.value) return undefined;
      if (newNode.value < temp.value) {
        if (temp.left === null) {
          temp.left = newNode;
          return this;
        }
        temp = temp.left;
      } else {
        if (temp.right === null) {
          temp.right = newNode;
          return this;
        }
        temp = temp.right;
      }
    }
  }

  contains(value) {
    if (this.root === null) return false;
    let temp = this.root;
    while (temp) {
      if (value < temp.value) {
        temp = temp.left;
      } else if (value > temp.value) {
        temp = temp.right;
      } else {
        return true;
      }
    }
    return false;
  }

  minValue (currentNode) {
    while (currentNode.left != null) {
        currentNode = currentNode.left
    }
    return currentNode
  }
}

function test() {
  let myBST = new BST();

  if (myBST.root === null) {
    console.log("Root: null");
  } else {
    console.log("Root:", myBST.root.value);
  }
}

test();

/*
    EXPECTED OUTPUT:
    ----------------
    Root: null

*/
