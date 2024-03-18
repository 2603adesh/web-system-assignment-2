function palindrome() {
    const input = document.getElementById("input").value;
    if (input ==input.split('').reverse().join('')) {
        document.getElementById("result").innerHTML = "The series of numbers is a palindrome.";
    } else {
        document.getElementById("result").innerHTML = "The series of numbers is not a palindrome.";
    }
}
