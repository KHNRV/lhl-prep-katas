//Function that helps determine which recipes match the ingredients that both
//bakeries have in stock
const chooseRecipe = function(bakeryA, bakeryB, recipes) {

  //Loop through all the recipes
  for (let recipe of recipes) {

    //Check wethever bakery A has the first ingredient and bakery B has the
    //second
    if (bakeryA.includes(recipe.ingredients[0])) {
      if (bakeryB.includes(recipe.ingredients[1])) {
        return recipe.name;
      }

    //Check wethever bakery B has the first ingredient and bakery A has the
    //second
    } else if (bakeryB.includes(recipe.ingredients[0])) {
      if (bakeryA.includes(recipe.ingredients[1])) {
        return recipe.name;
      }
    }
  }
}

//List of ingredients from both bakeries
let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];

//List of recipes
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

//List of ingredients from both bakeries
bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];

//List of recipes
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));