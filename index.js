document.addEventListener("DOMContentLoaded", () => {
    fetch("https://swapi.dev/api/people/")
        .then(resp => resp.json())
        .then(json => loadCharacter(json));
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

    console.log(people);
}

function loadCharacter(json) {
    addImage(json);
    let people = json.results;
    const characterList = document.querySelector("#Character-List")
    const lukeSkywalkerElement = document.createElement('img')
    const c3poElement = document.createElement('img')
    const r2d2Element = document.createElement('img')
    const darthVaderElement = document.createElement('img')
    const leiaOrganaElement = document.createElement('img')
    const owenLarsElement = document.createElement('img')
    const beruWhitesunLarsElement = document.createElement('img')
    const r5d4Element = document.createElement('img')
    const biggsDarklighterElement = document.createElement('img')
    const obiWanKenobiElement = document.createElement('img')
    characterList.appendChild(lukeSkywalkerElement)
    characterList.appendChild(c3poElement)
    characterList.appendChild(r2d2Element)
    characterList.appendChild(darthVaderElement)
    characterList.appendChild(leiaOrganaElement)
    characterList.appendChild(owenLarsElement)
    characterList.appendChild(beruWhitesunLarsElement)
    characterList.appendChild(r5d4Element)
    characterList.appendChild(biggsDarklighterElement)
    characterList.appendChild(obiWanKenobiElement)


    const lukeSkyWalkerImage = "Images/Luke Skywalker.jpg"


    lukeSkywalkerElement.setAttribute('src', lukeSkyWalkerImage)

}