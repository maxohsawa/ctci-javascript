class TripleStack {
  constructor(size) {
    this.divSize = size;
    this.array = new Array(3 * size);
    this.top1 = 0;
    this.top2 = this.top1 + size;
    this.top3 = this.top2 + size;
  }

  push(value, stackNo) {
    const key = `top${stackNo}`;
    this.array[this[key]] = value;
    this[key]++;
  }

  pop(stackNo) {
    const key = `top${stackNo}`;
    if (this[key] <= (stackNo - 1) * this.divSize) return null;
    // console.log(this.array);
    // console.log(key, this[key]);
    // console.log(this.array[this[key] - 1]);
    const value = this.array[this[key] - 1];
    this.array[this[key] - 1] = null;
    this[key]--;
    return value;
  }

  print() {
    console.log(this.array);
  }
}

const trip = new TripleStack(4);
trip.print();
trip.push(5, 1);
trip.print();
trip.push(7, 2);
trip.push(9, 3);
trip.print();
trip.push(66, 3);
trip.print();
console.log(trip.pop(3));
trip.print();
