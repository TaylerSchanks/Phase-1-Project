document.addEventListener("DOMContentLoaded", () => {
    fetch("https://swapi.dev/api/people/")
        .then(resp => resp.json())
        .then(json => loadCharacterImages(json));
});

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

    function showCharacterDetails(characterData) {
        let name = document.querySelector('.character-name');
        name.innerText = characterData.name;

        let image = document.querySelector(".character-image");
        image.src = characterData.image;

        let birthYear = document.querySelector(".character-birth-year");
        birthYear.innerText = characterData.birth_year;
    }

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
}


