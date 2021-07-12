class Bst {
  constructor(value) {
    this.node = value;
    this.left = this.left;
    this.right = this.right;
  }

  add(value) {
    if (value < this.node) {
      if (!this.left) this.left = new Bst(value);
      else this.left.add(value);
    } else {
      if (!this.right) this.right = new Bst(value);
      else this.right.add(value);
    }
  }

  size() {
    if (!this.right && !this.left) return 1;
    if (!this.right && this.left) return 1 + this.left.size();
    if (!this.left && this.right) return 1 + this.right.size();

    return 1 + this.right.size() + this.left.size();
  }

  contains(value) {
    if (value === this.node) return true;

    if (value < this.node) {
      return !!this.left && this.left.contains(value);
    }
    return !!this.right && this.right.contains(value);
  }

  depthFirstForEach(cb, order) {
    if (order === "in-order" || !order) {
      !!this.left && this.left.depthFirstForEach(cb, order);
      cb(this.node);
      !!this.right && this.right.depthFirstForEach(cb, order);
    }

    if (order === "pre-order") {
      cb(this.node);
      !!this.left && this.left.depthFirstForEach(cb, order);
      !!this.right && this.right.depthFirstForEach(cb, order);
    }

    if (order === "post-order") {
      !!this.left && this.left.depthFirstForEach(cb, order);
      !!this.right && this.right.depthFirstForEach(cb, order);
      cb(this.node);
    }
  }

  breadthFirstForEach(cb, array) {
    if (!array) {
      var array = [];
    }

    !!this.left && array.push(this.left);
    !!this.right && array.push(this.right);

    cb(this.node);

    if (array.length) array.shift().breadthFirstForEach(cb, array);
  }
}

let arrayOfValues = [];

let myTree = new Bst(15);
console.log(myTree.add(16));
console.log(myTree.add(13));
console.log(myTree.add(10));
console.log(myTree.size());
console.log(myTree.contains(13));
console.log(
  myTree.depthFirstForEach(function (val) {
    arrayOfValues.push(val);
  }, "post-order")
);
console.log(arrayOfValues);

let breadthArray = [];
console.log(
  myTree.breadthFirstForEach(function (val) {
    breadthArray.push(val);
  })
);

console.log(breadthArray);
