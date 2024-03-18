function countCharacters() {
    const inputString = document.getElementById("input").value.toLowerCase();
    const vowels = 'aeiou';
    let vowelCount = 0;
    let consonantCount = 0;

    for (let char of inputString) {
        if (vowels.includes(char)) {
            vowelCount++;
        } else if (char >= 'a' && char <= 'z') {
            consonantCount++;
        }
    }

    const resultElement = document.getElementById("result");
    resultElement.innerHTML = `Vowels: ${vowelCount}, Consonants: ${consonantCount}`;
}
