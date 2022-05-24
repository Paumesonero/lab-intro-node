class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item)
    this.length = this.items.length
    this.items.sort(function (a, b) {
      return a - b;
    });
  }

  get(pos) {
    if (pos <= this.items.length) {
      return this.items[pos];
    } else {
      throw new Error('OutOfBounds');
    }
  }

  max() {
    if (this.items.length >= 1) {
      return Math.max(...this.items)
    } else {
      throw new Error('EmptySortedList');
    }
  }

  min() {
    if (this.items.length >= 1) {
      return Math.min(...this.items)
    } else {
      throw new Error('EmptySortedList');
    }
  }

  sum() {
    if (this.items.length >= 1) {
      let totalSum = this.items.reduce(function (a, b) {
        return a + b
      });
      return totalSum
    }
    else {
      return 0;
    }
  }


  avg() {
    if (this.items.length >= 1) {
      let totalSum = this.items.reduce(function (a, b) {
        return a + b
      });
      return totalSum / this.items.length
    }
    else {
      throw new Error('EmptySortedList');
    }
  }
}

module.exports = SortedList;
