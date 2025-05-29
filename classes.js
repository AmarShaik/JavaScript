// Implement a Polygon class with the following properties:
// 1. A constructor that takes an array of integer side lengths.
// 2. A 'perimeter' method that returns the sum of the Polygon's side lengths

class Polygon{
    constructor(array_values) {
        this.arr = array_values;
    }
    perimeter() {
        let num = 0;
        for(let i = 0;i<this.arr.length;i++) {
            num += this.arr[i];
        }
        return num;
    }
}