/* W02-Task - Profile Home Page */


/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "John Sunday" 
let currentYear = new Date().getFullYear();
let profilePicture = "images/IMG_1506.jpg";





/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
let foodElement = document.getElementById("food");
const yearElement = document.querySelectorAll('year');
const imageElement = document.querySelector('img');


/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear; 
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `${fullName}`);




/* Step 5 - Array */
let favFoods = ["Pizza", "Burger", "Ice Cream", "Sushi"];

foodElement.innerHTML = favFoods.join('<br>');

// Step 3: Declare and instantiate a variable to hold another single favorite food item
let newFavoriteFood = "Pasta";

// Step 4: Add the value stored in this new variable to your favorite food array
favFoods.push(newFavoriteFood);

// Step 5: Append the new array values onto the displayed content of the HTML element with the id of "food"
foodElement.innerHTML += `<br>${favFoods.join('<br>')}`;

// Step 6: Remove the first element in the favorite food array
favFoods.shift();

// Step 7: Append the array output showing the modified array
foodElement.innerHTML += `<br>${favFoods.join('<br>')}`;

// Step 8: Remove the last element in the favorite food array
favFoods.pop();

// Step 9: Append the array output with this final modified favorite foods array
foodElement.innerHTML += `<br>${favFoods.join('<br>')}`;







