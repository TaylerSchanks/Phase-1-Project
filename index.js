document.addEventListener("DOMContentLoaded", () => {
    fetch("https://swapi.dev/api/people/")
        .then(resp => resp.json())
        .then(json => console.log(json));
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

    console.log(people);
}

function loadCharacter(json) {
    let people = json.results;
    addImage(json);

}