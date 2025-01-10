const gameLeftDiv = document.querySelector('.gameLeft');
const buttons = document.querySelectorAll('.btn');
const moviesButton = document.getElementById('movies');
const foodButton = document.getElementById('food');
const animalsButton = document.getElementById('animals');
const carsButton = document.getElementById('cars');
const hintButton = document.querySelector('.hint');
let tries = 7;
let randomMovie;
let randomFood;
let randomCars;
let randomAnimals;
let randomCategory;

run = function (movies, food, animals, cars) {
    gameLeftDiv.innerHTML = '';
    randomCategory = category[Math.floor(Math.random() * category.length)];
    console.log(randomCategory);
    let chosenWord = randomCategory;

    let revealedWord = '_ '.repeat(randomCategory.length);
    const newDiv = document.createElement('div');
    newDiv.classList.add('centeredTwo');
    
    function printLines() {
        const h1 = document.createElement('h1');
        h1.textContent = revealedWord.trim();
        newDiv.appendChild(h1);
    }
    function revealHint() {
        let hiddenIndexes = [];
        for (let i = 0; i < revealedWord.length; i++) {
            if (revealedWord[i] === '_') {
                hiddenIndexes.push(i);
            }
        }
        if (hiddenIndexes.length > 0) {
            let randomIndex = hiddenIndexes[Math.floor(Math.random() * hiddenIndexes.length)];
            revealedWord = revealedWord.split(' ').map((letter, i) => {
                if (i === randomIndex) {
                    return chosenWord[i];
                } else {
                    return letter;
                }
            }).join(' ');

            const h1 = document.querySelector('.centeredTwo h1');
            h1.textContent = revealedWord.trim();
        }
    }

    hintButton.addEventListener('click', revealHint);

    function containsUnderscore() {
        const centeredTwoDiv = document.querySelector('.centeredTwo');
        if (centeredTwoDiv && centeredTwoDiv.textContent.includes('_')) {
            return true;
        } else {
            setTimeout(function () {
                const overlay = document.createElement('div');
                overlay.style.position = 'fixed';
                overlay.style.top = '0';
                overlay.style.left = '0';
                overlay.style.width = '100%';
                overlay.style.height = '100%';
                overlay.style.backgroundColor = 'rgb(241, 241, 158)';
                overlay.style.display = 'flex';
                overlay.style.justifyContent = 'center';
                overlay.style.alignItems = 'center';
                overlay.style.zIndex = '1000';

                const message = document.createElement('h1');
                message.textContent = 'YOU WIN';
                message.style.color = 'green';
                message.style.fontSize = '100px';
                message.style.textAlign = 'center';

                overlay.appendChild(message);
                document.body.appendChild(overlay);

                setTimeout(function () {
                    location.reload();
                }, 3000);
            }, 500);
            return false;
        }
    }

    printLines();
    const gameRightDiv = document.querySelector('.gameRight');
    gameRightDiv.innerHTML = '';
    const img = document.createElement('img');
    img.src = 'base.png';
    img.style.width = '285px';
    img.style.height = '470px';
    img.style.borderRadius = '13px';

    gameRightDiv.appendChild(img);
    const gameDiv = document.querySelector('.gameLeft');
    gameDiv.appendChild(newDiv);

    let incorrect = 0;

    function checking(input) {
        let updatedWord = '';
        let found = false;

        for (let i = 0; i < randomCategory.length; i++) {
            if (randomCategory[i].toLowerCase() === input.toLowerCase()) {
                updatedWord += randomCategory[i] + ' ';
                found = true;
            } else {
                updatedWord += revealedWord[i * 2] + ' ';
            }
        }
        revealedWord = updatedWord.trim();
        if (found) {
            console.log(`The letter "${input}" is in the word!`);
        } else {
            incorrect++;
            console.log(`The letter "${input}" is not in the word.`);
            console.log(`Incorrect guesses: ${incorrect}`);

            if (incorrect === tries) {
                setTimeout(function () {
                    const overlay = document.createElement('div');
                    overlay.style.position = 'fixed';
                    overlay.style.top = '0';
                    overlay.style.left = '0';
                    overlay.style.width = '100%';
                    overlay.style.height = '100%';
                    overlay.style.backgroundColor = 'black';
                    overlay.style.display = 'flex';
                    overlay.style.justifyContent = 'center';
                    overlay.style.alignItems = 'center';
                    overlay.style.zIndex = '1000';

                    const message = document.createElement('h1');
                    message.textContent = 'GAME OVER';
                    message.style.color = 'red';
                    message.style.fontSize = '100px';
                    message.style.textAlign = 'center';

                    overlay.appendChild(message);
                    document.body.appendChild(overlay);

                    setTimeout(function () {
                        location.reload();
                    }, 3000);
                }, 1000);
            }
            if (incorrect == 1) {

                const gameRightDiv = document.querySelector('.gameRight');
                gameRightDiv.innerHTML = '';
                const img = document.createElement('img');
                img.src = 'img1.png';

                img.style.width = '285px';
                img.style.height = '470px';
                img.style.borderRadius = '13px';

                gameRightDiv.appendChild(img);
            }
            else if (incorrect == 1) {
                const gameRightDiv = document.querySelector('.gameRight');
                gameRightDiv.innerHTML = '';
                const img = document.createElement('img');
                img.src = 'img1.png';

                img.style.width = '285px';
                img.style.height = '470px';
                img.style.borderRadius = '13px';

                gameRightDiv.appendChild(img);
            }
            else if (incorrect == 1) {
                const gameRightDiv = document.querySelector('.gameRight');
                gameRightDiv.innerHTML = '';
                const img = document.createElement('img');
                img.src = 'img1.png';

                img.style.width = '285px';
                img.style.height = '470px';
                img.style.borderRadius = '13px';

                gameRightDiv.appendChild(img);
            }
            else if (incorrect == 2) {
                const gameRightDiv = document.querySelector('.gameRight');
                gameRightDiv.innerHTML = '';
                const img = document.createElement('img');
                img.src = 'img2.png';

                img.style.width = '285px';
                img.style.height = '470px';
                img.style.borderRadius = '13px';

                gameRightDiv.appendChild(img);
            }
            else if (incorrect == 3) {
                const gameRightDiv = document.querySelector('.gameRight');
                gameRightDiv.innerHTML = '';
                const img = document.createElement('img');
                img.src = 'img3.png';

                img.style.width = '285px';
                img.style.height = '470px';
                img.style.borderRadius = '13px';

                gameRightDiv.appendChild(img);
            }
            else if (incorrect == 4) {
                const gameRightDiv = document.querySelector('.gameRight');
                gameRightDiv.innerHTML = '';
                const img = document.createElement('img');
                img.src = 'img4.png';

                img.style.width = '285px';
                img.style.height = '470px';
                img.style.borderRadius = '13px';

                gameRightDiv.appendChild(img);
            }
            else if (incorrect == 5) {
                const gameRightDiv = document.querySelector('.gameRight');
                gameRightDiv.innerHTML = '';
                const img = document.createElement('img');
                img.src = 'img5.png';

                img.style.width = '285px';
                img.style.height = '470px';
                img.style.borderRadius = '13px';

                gameRightDiv.appendChild(img);
            }
            else if (incorrect == 6) {
                const gameRightDiv = document.querySelector('.gameRight');
                gameRightDiv.innerHTML = '';
                const img = document.createElement('img');
                img.src = 'img6.png';

                img.style.width = '285px';
                img.style.height = '470px';
                img.style.borderRadius = '13px';

                gameRightDiv.appendChild(img);
            }
            else if (incorrect == 7) {
                const gameRightDiv = document.querySelector('.gameRight');
                gameRightDiv.innerHTML = '';
                const img = document.createElement('img');
                img.src = 'img7.png';

                img.style.width = '285px';
                img.style.height = '470px';
                img.style.borderRadius = '13px';

                gameRightDiv.appendChild(img);
            }
        }
        newDiv.innerHTML = '';
        printLines();
    }

    buttons.forEach((btn) => {
        btn.addEventListener('click', () => {
            const guessedLetter = btn.innerText;
            checking(guessedLetter);
            containsUnderscore()
        });
    });
}

moviesButton.addEventListener('click', function () {
    randomMovie = randomCategory;
    const movies = ['Titanic', 'Joker', 'Halloween', 'Shrek', 'Rocky',
        'Frozen', 'Jumanji', 'Avatar', 'Dracula', 'Cars', 'Milk', 'Taken', 'Aladdin'];
    category = movies;
    run(movies);
});
foodButton.addEventListener('click', function () {
    randomFood = randomCategory;
    const food = ['carrot', 'hamburger', 'tacos', 'rice', 'fries', 'burrito', 'salad',
        'bread', 'cucumber', 'tomato', 'sushi', 'chicken'];
    category = food;
    run(food)
});
animalsButton.addEventListener('click', function () {
    randomAnimals = randomCategory;
    const animals = ['elephant', 'tiger', 'lion', 'bear', 'giraffe', 'zebra', 'panda',
        'kangaroo', 'whale', 'dolphin', 'eagle', 'leopard', 'crocodile'];
    category = animals;
    run(animals)
});
carsButton.addEventListener('click', function () {
    randomCars = randomCategory;
    const cars = ['subaru', 'lexus', 'porsche', 'honda', 'hyundai', 'toyota', 'infiniti',
        'mercedes', 'nissan', 'tesla', 'chevrolet', 'volkswagen', 'cadillac'
    ];
    category = cars;
    run(cars)
});

