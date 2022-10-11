//The purpose of this Lab is to get a solid understanding of the .filter() and .map() advanced array methods.
//These methods will be used extensively on future projects

//Dataset
let dishes = [
	{
		id: 1,
		name: "Pizza",
		cuisine: "Italian",
		servings: 8,
		ingredients: ["tomato", "cheese"],
	},
	{
		id: 2,
		name: "Spaghetti",
		cuisine: "Italian",
		servings: 2,
		ingredients: ["tomato", "cheese"],
	},
	{
		id: 3,
		name: "Ravioli",
		cuisine: "Italian",
		servings: 2,
		ingredients: ["tomato", "cheese"],
	},
	{
		id: 4,
		name: "Enchiladas",
		cuisine: "Mexican",
		servings: 6,
		ingredients: ["tomato", "cheese"],
	},
	{
		id: 5,
		name: "Tacos",
		cuisine: "Mexican",
		servings: 4,
		ingredients: ["tomato", "cheese"],
	},
	{
		id: 6,
		name: "Burrito Supreme",
		cuisine: "Mexican",
		servings: 1,
		ingredients: ["tomato", "cheese"],
	},
	{
		id: 7,
		name: "Elote",
		cuisine: "Mexican",
		servings: 4,
		ingredients: ["corn", "cheese"],
	},
	{
		id: 8,
		name: "Crepes",
		cuisine: "French",
		servings: 1,
		ingredients: ["flour", "sugar"],
	},
	{
		id: 9,
		name: "Corned Beef & Cabbage",
		cuisine: "Irish",
		servings: 10,
		ingredients: ["beef", "cabbage"],
	},
	{
		id: 10,
		name: "Beef Stew",
		cuisine: "Irish",
		servings: 8,
		ingredients: ["beef", "tomato"],
	},
	{
		id: 11,
		name: "Lasagna",
		cuisine: "Vegetarian",
		servings: 8,
		ingredients: ["tomato", "cheese"],
	},
	{
		id: 12,
		name: "Falafel",
		cuisine: "Vegetarian",
		servings: 1,
		ingredients: ["chickpea", "parsley"],
	},
	{
		id: 13,
		name: "Chili",
		cuisine: "Vegetarian",
		servings: 13,
		ingredients: ["tomato", "chickpea"],
	},
	{
		id: 14,
		name: "Goulash",
		cuisine: "Hungarian",
		servings: 15,
		ingredients: ["beef", "tomato"],
	},
	{
		id: 15,
		name: "Pho",
		cuisine: "Vietnamese",
		servings: 4,
		ingredients: ["beef", "ginger"],
	},
];

//Example function
//IMPORTANT: Take the time to step through this example function with a breakpoint until you could explain what is going on to someone else before starting this lab.

function filterExample() {
	//Debug tip: Use a console.log(el) inside the filter function to get a visualization of what el represents and see all its properties! This helps you to know what you can access with dot notation inside the filter. Do this every time you use a .filter or else you are working in the dark!
	let results;
	results = dishes.filter(function (el) {
		console.log("el inside filterExample's filter: ", el);
		if (el.cuisine === "Mexican") {
			return true;
		} else {
			return false;
		}
	});

	return results;
}

let mexicanFood = filterExample();
console.log("mexicanFood from filterExample", mexicanFood);

//Reminder: Do not move on to problem one until understand the example completely!!
//1. Create a function that will return all dishes with the cuisine type of "vegetarian"
//Filter

function problemOne(dishesArray) {
	let results = dishesArray.filter((el) => {
		if (el["cuisine"].toLowerCase() === "vegetarian") {
			return true;
		} else {
			return false;
		}
	});

	return results;
}

let vegetarianDishes = problemOne(dishes);
console.log("Problem One:", vegetarianDishes);

//2. Create a function that will prompt the user to enter a cuisine type and then return all dishes that match that type
//Filter

function problemTwo(dishesArray) {
	let userInput = prompt("Enter a cuisine type:");
	let results = dishesArray.filter((el) => {
		if (el["cuisine"].toLowerCase() === userInput.toLowerCase()) {
			return true;
		} else {
			return false;
		}
	});

	return results;
}

let problemTwoResults = problemTwo(dishes);
console.log("Problem Two:", problemTwoResults);

//3. Create a function that will return all dishes with the cuisine type of "Italian" and a serving size greater than 5.
//Filter

function problemThree(dishesArray) {
	let results = dishesArray.filter((el) => {
		if (el["cuisine"] === "Italian" && el["servings"] > 5) {
			return true;
		} else {
			return false;
		}
	});

	return results;
}

let problemThreeResults = problemThree(dishes);
console.log("Problem Three:", problemThreeResults);

//4. Create a function that will return only dishes whose id number matches their serving count.
//Filter

function problemFour(dishesArray) {
	let results = dishesArray.filter((el) => {
		if (el.id === el.servings) {
			return true;
		} else {
			return false;
		}
	});

	return results;
}

let problemFourResults = problemFour(dishes);
console.log("Problem Four:", problemFourResults);

//5. Create a function that will return only dishes whose serving count is even.
//Filter

function problemFive(dishesArray) {
	let results = dishesArray.filter((el) => {
		if (el.servings % 2 === 0) {
			return true;
		} else {
			return false;
		}
	});

	return results;
}

let problemFiveResults = problemFive(dishes);
console.log("Problem Five:", problemFiveResults);

//6. Create a function that will return dishes whose ingredients array INCLUDES "chickpea".
//Hint: You do not want to check the array's indexes to find out what the array INCLUDES.
//Double Hint: Research 'javascript does array include item'
//Filter

function problemSix(dishesArray) {
	let results = dishesArray.filter((el) => {
		if (el.ingredients.includes("chickpea")) {
			return true;
		} else {
			return false;
		}
	});

	return results;
}

// function problemSix(dishesArray) {
// 	let results = dishesArray.filter((el) => el.ingredients.includes("chickpea"));
// 	return results;
// }

let problemSixResults = problemSix(dishes);
console.log("Problem Six:", problemSixResults);

//7. Create a function that will prompt the user to type the name of one ingredient. Then use a filter to find all the dishes whose ingredients array INCLUDES that ingredient. Return the new array.
//Filter

function problemSeven(dishesArray) {
	let userInput = prompt("Enter an ingredient:");
	let results = dishesArray.filter((el) => el.ingredients.includes(userInput));
	return results;
}

let problemSevenResults = problemSeven(dishes);
console.log("Problem Seven:", problemSevenResults);

//8a. Create a function that will return an array of the string cuisine types. Ie, ["Italian", "Italian", "Mexican", ...]
//Map

function problemEight(dishesArray) {
	let results = dishesArray.map((el) => el.cuisine);
	return results;
}

let problemEightResults = problemEight(dishes);
console.log("Problem Eight:", problemEightResults);

//9. Create a function that will return an array of strings, with the cuisine type appended to the start of the dish's name. Ie, ["Italian Pizza", "Italian Spaghetti", ...]
//Map
function problemNine(dishesArray) {
	let results = dishesArray.map((el) => `${el.cuisine} ${el.name}`);
	return results;
}

let problemNineResults = problemNine(dishes);
console.log("Problem Nine:", problemNineResults);

//10. Create a function that will use advanced array methods on the 'dishes' array and return the result ["Vegetarian Lasagna", "Vegetarian Falafel", "Vegetarian Chili"]

//BONUS

//8b. Use the filter method to eliminate duplicate from problem 8a.

//11. Create a function that will return dishes whose ingredients array INCLUDES "tomato" OR "cheese".
//Hint: You do not want to check the array's indexes to find out what the array INCLUDES.
//Filter

//12. Create a function that will return the total serving count of all dishes.
//Must use Reduce, not a loop.

//13. Create a function that will return an array of any objects that do not share a cuisine type with any other objects.
