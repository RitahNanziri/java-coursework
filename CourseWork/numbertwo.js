
// Function to square a number
function squareNumber(num) {
    return num * num;
}

// Loop from 1 to 10, pass each number as an argument to the square function, and display the result
for (let i = 1; i <= 10; i++) {
    let squared = squareNumber(i);
    console.log("The square of", i, "is", squared);
}
