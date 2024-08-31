
document.addEventListener('DOMContentLoaded', () => {
    const words = [
        { word: "javascript", scrambled: "sjcivatripa" },
        { word: "developer", scrambled: "deveelopr" },
        { word: "function", scrambled: "noictufn" },
        { word: "variable", scrambled: "blrvaiae" },
        { word: "scramble", scrambled: "mesbrcla" }
    ];

    let currentWord = {};
    let attempts = 0;

    const scrambledWordElement = document.getElementById('scrambled-word');
    const userInput = document.getElementById('user-input');
    const submitBtn = document.getElementById('submit-btn');
    const newWordBtn = document.getElementById('new-word-btn');
    const feedbackMessage = document.getElementById('feedback-message');
    const attemptsCount = document.getElementById('attempts-count');


    function pickNewWord() {
        const randomIndex = Math.floor(Math.random() * words.length);
        currentWord = words[randomIndex];
        scrambledWordElement.textContent = currentWord.scrambled;
        userInput.value = '';
        feedbackMessage.textContent = '';
        attempts = 0;
        attemptsCount.textContent = attempts;
    }


    function checkGuess() {
        const userGuess = userInput.value.trim().toLowerCase();
        attempts++;
        attemptsCount.textContent = attempts;

        if (userGuess === currentWord.word) {
            feedbackMessage.textContent = "Correct! You've unscrambled the word!";
            feedbackMessage.style.color = 'green';
        } else {
            feedbackMessage.textContent = "Incorrect guess. Try again!";
            feedbackMessage.style.color = '#d9534f';
        }
    }


    submitBtn.addEventListener('click', checkGuess);
    newWordBtn.addEventListener('click', pickNewWord);

    pickNewWord();
});
