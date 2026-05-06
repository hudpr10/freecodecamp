/*
Allergen Friendly Meals

Given an array of meals and an array of allergens to avoid, return the names of all the meals that contain none of the given allergens.

  - Each meal is in the format [meal, allergens], where meal is the name of the meal, and allergens is an array of the allergens the meal contains. For example, ["pasta", ["wheat", "milk"]].
  - Allergens to avoid will be an array of strings.
  
Return safe meal names in the same order given. If no meal is safe, return an empty array.
*/

function getAllergenFriendlyMeals(meals, allergens) {
  const allergensSet = new Set(allergens);
    
  return meals
    .filter(([meal, ingredients]) => 
            ingredients.every(ingredient => 
                              !allergensSet.has(ingredient)))
    .map(([name]) => name);
}

getAllergenFriendlyMeals([["oatmeal", ["nuts"]], ["pancakes", ["wheat", "milk"]], ["granola", []], ["yogurt", ["milk"]], ["eggs", ["eggs", "milk"]], ["toast", ["wheat"]]], ["eggs", "milk"]);
// return: [ 'oatmeal', 'granola', 'toast' ]
