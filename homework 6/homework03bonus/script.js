let form = document.getElementById('form');
let nameOf = document.getElementById('name');
let numberOf = document.getElementById('number');
let ingredientsContainer = document.getElementById('ingredients-container');
let submitIngredientsButton = document.getElementById('submit-ingredients-btn');
let ingredientsList = document.getElementById('ingredients-list');

let recipeData = {
    name: '',
    ingredients: []
};

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const recipeName = nameOf.value;
    const numberOfIngredients = parseInt(numberOf.value);

    if (isNaN(numberOfIngredients) || numberOfIngredients <= 0) {
        alert('Please enter a valid number of ingredients.');
        return;
    }

    recipeData.name = recipeName;
    ingredientsContainer.innerHTML = '';

    for (let i = 0; i < numberOfIngredients; i++) {
        const ingredientDiv = document.createElement('div');
        ingredientDiv.classList.add('form-group');

        const label = document.createElement('label');
        label.textContent = `Ingredient ${i + 1}`;

        const input = document.createElement('input');
        input.type = 'text';
        input.name = `ingredient${i + 1}`;
        input.placeholder = `Enter ingredient ${i + 1}`;
        input.required = true;

        ingredientDiv.appendChild(label);
        ingredientDiv.appendChild(input);
        ingredientsContainer.appendChild(ingredientDiv);
    }

    submitIngredientsButton.style.display = 'block';
});

submitIngredientsButton.addEventListener('click', function() {
    let ingredients = [];

    const ingredientInputs = document.querySelectorAll('#ingredients-container input');

    ingredientInputs.forEach((input, index) => {
        ingredients.push(input.value);
    });

    recipeData.ingredients = ingredients;

    console.log('Recipe Data:', recipeData);

    ingredientsList.innerHTML = '';
    const ul = document.createElement('ul');

    ingredients.forEach(function(ingredient) {
        const li = document.createElement('li');
        li.textContent = ingredient;
        ul.appendChild(li);
    });

    ingredientsList.appendChild(ul);

    form.reset();
    ingredientsContainer.innerHTML = '';
    submitIngredientsButton.style.display = 'none';
});
