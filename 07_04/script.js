/**
 * Challenge: Build and modify an array
 * - Build an array with 8 items
 * - Remove the last item
 * - Add the last item as the first item on the array
 * - Sort the items by alphabetical order
 * - Use the find() method to find a specific item in the array
 * - Remove the item you found using the find method from the array.
 */

let content = ["youtube", "chatGPT", "google", "bing", "meta", 100, 50, 10];

console.log(content);

content.pop();

console.log(content);

content.unshift(10);

console.log(content);

content.sort();

console.log(content);

const extra = content.find((item) => item === "bing");

console.log(extra);
console.log(content);

const filterExtra = content.filter((item) => item !== "bing");

console.log(filterExtra);
