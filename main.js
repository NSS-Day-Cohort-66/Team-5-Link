const materials = [
  "Hylian Rice",
  "Big Hearty Truffle",
  "Tabantha Wheat",
  "Raw Prime Meat",
  "Hateno Cheese",
  "Bird Egg",
];
const meals = [];

const cook = (firstIngredient, secondIngredient) => {
  if (
    firstIngredient === "Hylian Rice" &&
    secondIngredient === "Big Hearty Truffle"
  ) {
    meals.push("Mushroom Rice Balls");
  }
};

cook(materials[0], materials[1]);

console.log("MEALS:");
console.log("---------------");
for (const meal of meals) {
  console.log(meal);
}

// = is an ASSIGNMENT operation
// === is a COMPARISON operation

// Hateno Cheese and a Bird Egg will make a Cheesy Omlette
// Tabantha Wheat and Hateno Cheese will make a Cheesy Hylian Pizza
// Raw Prime Meat and Hylian Rice will make Prime Meat and Rice Bowl
