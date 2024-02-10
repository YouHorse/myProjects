const input = document.getElementById("input")

function check() {
    const value = input.value
    const palindrome = value.split("").reverse().join("");

    if (value === palindrome) {
        alert("This word is Palindrome")
    } else {
        alert("This word is not Palindrome")
    }
}