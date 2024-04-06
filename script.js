const options = {
    eat: ["Fries", "Pizza", "Burgers", "Chinese food", "Pasta", "Indian food", "Chicken Biriyani", "Cook Dinner Together", "Go Somewhere New", "Go for Snacks"],
    do: ["Watch a movie", "Go for a walk", "Play board games", "Go in a park", "Learn something new", "Roller's Choice"],
    after: ["Have dessert", "Grab a coffee", "Snuggle", "Take a nap", "Have a cocktail", "Go stargazing", "Give each other a Massage", ""],
    sex: ["Intimate massage", "Try a new position", "Watch a sexy movie", "Roleplay", "Use toys", "Have a quickie","BlowJob", "Eat Pussy","Missionary","CowGirl", "Doggy"]
};

const optionContainers = document.querySelectorAll('.option');
let index = 0;
let gameActive = true;
let currentActiveBox = 0;

function getRandomOption(category) {
    const categoryOptions = options[category];
    const randomIndex = Math.floor(Math.random() * categoryOptions.length);
    return categoryOptions[randomIndex];
}

function showOption(optionDiv, category) {
    const option = getRandomOption(category);
    optionDiv.innerHTML = option;
    optionDiv.classList.add('show');
}

function reset() {
    optionContainers.forEach(optionContainer => {
        const optionDiv = optionContainer.querySelector('.option-content');
        optionDiv.innerHTML = '<img src="dice.png" alt="Dice">';
        optionDiv.classList.remove('show');
        optionContainer.classList.remove('active');
    });
    index = 0;
    document.querySelector('.reset-btn').classList.remove('active');
    gameActive = true;
    currentActiveBox = 0;
}

optionContainers.forEach((optionContainer, i) => {
    optionContainer.addEventListener('click', () => {
        if (!gameActive || i !== currentActiveBox) return; // Allow clicking only on the current active box
        const heading = optionContainer.querySelector('.heading').textContent.toLowerCase();
        if (heading === 'what to eat') showOption(optionContainer.querySelector('.option-content'), 'eat');
        else if (heading === 'what to do') showOption(optionContainer.querySelector('.option-content'), 'do');
        else if (heading === 'after that?') showOption(optionContainer.querySelector('.option-content'), 'after');
        else if (heading === 'sex time') showOption(optionContainer.querySelector('.option-content'), 'sex');

        optionContainer.classList.add('active');
        index++;
        currentActiveBox++;

        if (index === optionContainers.length) {
            document.querySelector('.reset-btn').classList.add('active');
            gameActive = false; // Disable clicking after all options are shown
        }
    });
});

