// Prompt user for numbers and names
let numbersInput = prompt("Enter numbers separated by commas (e.g., 24, 65, 21):");
let namesInput = prompt("Enter names separated by commas (e.g., Zenvo, Erica):");

// Parse inputs into arrays
let numbers = numbersInput.split(",").map(Number);
let names = namesInput.split(",").map(name => name.trim());

// Merge both arrays into a single array
let mergedArray = [...numbers, ...names];
console.log("Merged Array:", mergedArray);

// Sort numbers in reverse order (descending)
let sortedNumbers = [...numbers].sort((a, b) => b - a);
console.log("Numbers Sorted in Reverse:", sortedNumbers);

// Sort names alphabetically
let sortedNames = [...names].sort();
console.log("Names Sorted Alphabetically:", sortedNames);
