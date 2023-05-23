# Star Wars: Galactic Inquiry

**Star Wars: Galactic Inquiry** is a simple picker tool that allows for the user to select a character portrait and view some of the character's bio.

## Demo


## How it works

The Galactic Inquiry fetches data from the [SWAPI](https://swapi.dev/api/people/) open API where only name and birth year are used.

The API did not have images for the characters, so I had to add my own JPEGs.

The following is an array I made to add JPEG images later.  They key ```name:``` is used to match the key being fetched from the API.

```js
let arrayOfImages = [
    {
        name: "Luke Skywalker",
        image: "Images/Luke Skywalker.jpg"
    },
    {
        name: "C-3PO",
        image: "Images/C-3PO.jpg"
    },
    {
        name: "R2-D2",
        image: "Images/R2-D2.jpeg"
    },
    {
        name: "Darth Vader",
        image: "Images/Darth Vader.jpg"
    },
    {
        name: "Leia Organa",
        image: "Images/Leia Organa.jpeg"
    },
    {
        name: "Owen Lars",
        image: "Images/Owen Lars.jpg"
    },
    {
        name: "Beru Whitesun lars",
        image: "Images/Beru Whitesun lars.jpg"
    },
    {
        name: "R5-D4",
        image: "Images/R5-D4.jpeg"
    },
    {
        name: "Biggs Darklighter",
        image: "Images/Biggs Darklighter.jpeg"
    },
    {
        name: "Obi-Wan Kenobi",
        image: "Images/Obi-Wan Kenobi.jpeg"
    }
];
```
I then used the ```arrayOfImages``` array in a function to add the correct image to the correct character being fetched.  I did this using the following function:

```js
function addImage(json) {
    let people = json.results;
    people.forEach(obj => {
        arrayOfImages.forEach(imageObj => {
            if (obj.name === imageObj.name) {
                obj.image = imageObj.image;
            }
        });
    });
}
```
Next, I wrote a function called ```loadCharacterImages(json)``` as shown below:
```js
function loadCharacterImages(json) {
    addImage(json);
    let character = json.results;
    let currentCharacterIndex = 0;
    let characters = [];
    const characterList = document.querySelector("#Character-List")
    arrayOfImages.forEach((imageObj, index) => {
        const characterElement = document.createElement('img');
        characterElement.setAttribute('src', imageObj.image);
        characterList.appendChild(characterElement);
        characters.push(characterElement);
        characterElement.addEventListener('click', () => {
            showCharacterDetails(character[index]);
        });
    });

    document.body.appendChild(characterList);
```
This function takes the json data from the fetch request as the parameter and passes it into the ```addImage``` function to get the image added to the character's bio.  ```loadCharacterImages``` loops through each object given by the json data and creates an image element, appends the element to the DOM, pushes the image to the ```characters``` array, and lastly adds an event listener to show the character's bio (I'll explain what ```showCharacterDetails``` is next, just know it's being used to display the character's bio in the main element of the page.)

Now lets look at the ```showCharacterDetails()``` function:

```js
function showCharacterDetails(characterData) {
        let name = document.querySelector('.character-name');
        name.innerText = characterData.name;

        let image = document.querySelector(".character-image");
        image.src = characterData.image;

        let birthYear = document.querySelector(".character-birth-year");
        birthYear.innerText = characterData.birth_year;
    }
```
This function is used in the ```loadCharacterImages``` function so that every time an image element is clicked on, the main ```"#character-card"``` is populated with the clicked on images character details.

As of right now, **Star Wars: Galactic Inquiry** takes json data from the [SWAPI](https://swapi.dev/api/people/) open API, adds images to the character's objects, creates image elements to house the images, displays the character's bio with an image in the main ```#character-card```.  The ```#character-card``` is updated for each image selected on.

Lastly, is the ability to use not just the left click on the mouse, but the left and right arrow keys to move between the character list.  Let's look at the functions I created to do this:
```js
function navigateLeft() {
        currentCharacterIndex = (currentCharacterIndex - 1 + characters.length) % characters.length;
        showCharacterDetails(character[currentCharacterIndex]);
    }

    function navigateRight() {
        currentCharacterIndex = (currentCharacterIndex + 1) % characters.length;
        showCharacterDetails(character[currentCharacterIndex]);
    }

    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowLeft') {
            navigateLeft();
        } else if (event.key === 'ArrowRight') {
            navigateRight();
        }
    });
    showCharacterDetails(character[0]);
```
The ```currentCharacterIndex``` was set to 0 in the ```loadCharacterImages()``` function.  What is happening here is that the function ```navigateLeft()``` is taking the current index (there are 10 characters loaded from the json so index 0-9 are available), subtracting 1, adding the full character length (10), then taking that value from the parenthesis and remaindering it against the full character length.  This ensures that when you are at the first index and you hit the left arrow key, the last index will be displayed.  Another way to think about it is you can infinitely press the left arrow key and cycle through all 10 indexes.

```navigateRight()``` is doing the same thing as ```navigateLeft()``` but in the opposite direction
Finally, ```showCharacterDetails(character[0])``` is ensuring that when the page is refreshed, it will always display the ```[0]``` index from the json data.
## Credit

I got all the JPEGs from Google Images 