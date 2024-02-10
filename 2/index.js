const input = document.getElementById("input")

function check() {
    const value = input.value
    const palindrome = value.split("").reverse().join("");

    if(value === palindrome)
        alert("The word is a Palindrome")
    else{
        alert("No it is not")
    }
}