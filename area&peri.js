function main() {
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
    const PI = Math.PI
    let r = readLine();
    // Print the area of the circle:
    let area = PI * Math.pow(r,2)
    // Print the perimeter of the circle:
    let perimeter = 2 * PI * r
    console.log(area)
    console.log(perimeter)
}