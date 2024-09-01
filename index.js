// index.js
const input = document.getElementById("input")

function reverseString(str) {
    return str.split("").reverse().join("")
}

function check() {
    const inputElement = document.getElementById('input');
    const value = inputElement.value.trim();

    if (value.length >= 2) {
        const reverse = reverseString(value);

        if (value === reverse) {
            alert("P A L I N D R O M E");
        } else {
            alert("Not Palindrome");
        }

        inputElement.value = ""; // Clear the input field after checking
    } else {
        alert('Please enter at least two letters.');
    }
}