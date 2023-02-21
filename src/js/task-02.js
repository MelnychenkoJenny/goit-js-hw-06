const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const makeIngredientsItemEl = (ingredients) =>
  ingredients.map((ingredient) => {
    const ingredientsItemEl = document.createElement("li");
    ingredientsItemEl.textContent = ingredient;
    ingredientsItemEl.classList.add("item");
    return ingredientsItemEl;
  });

const ingredientsEl = makeIngredientsItemEl(ingredients);
const ingredientsListEl = document.querySelector("#ingredients");
ingredientsListEl.append(...ingredientsEl);
