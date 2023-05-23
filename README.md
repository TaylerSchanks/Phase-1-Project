# Star Wars: Galactic Inquiry

**Star Wars: Galactic Inquiry** is a simple picker tool that allows for the user to select a character portrait and view some of the character's bio.

##Demo


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
This function takes the json data from the fetch request as the parameter and passes it into the ```addImage``` function to get the image added to the character's bio.  ```loadCharacterImages``` 

## Credit

I got all the JPEGs from Google Images 