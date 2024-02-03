// Step 1: Declare a new object literal variable named myProfile to hold information about yourself
let myProfile = {
    name: "John Sunday",
    photo: "images/IMG_1506.jpg",
    favoriteFoods: ["Pizza", "Burger", "Ice Cream", "Sushi","Fried Rice"],
    hobbies: ["Reading", "Coding", "Gaming"],
    placesLived: [
      {
        place: 'San Francisco, CA',
        length: '1 year'
      },
      {
        place: 'Osun, OS',
        length: '16 year'
      },
      {
        place: 'Oyo, OY',
        length: '3 year'
      },
    ]
  };
  
  // Step 2: DOM Manipulation - Assign values to HTML elements
  
  // Assign values to name
  document.querySelector('#name').textContent = myProfile.name;
  
  // Assign values to photo
  document.querySelector('#photo').setAttribute('src', myProfile.photo);
  document.querySelector('#photo').setAttribute('alt', myProfile.name);
  
  // Populate favorite foods list
  myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
  });
  
  // Populate hobbies list
  myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
  });
  
  // Populate places lived list
  myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    let dd = document.createElement('dd');
    dt.textContent = place.place;
    dd.textContent = place.length;
    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
  });
  