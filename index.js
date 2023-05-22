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
    document.body.appendChild(characterList)
    const lukeSkyWalkerImage = "Images/Luke Skywalker.jpg"
    const c3poImage = "Images/C-3PO.jpg"
    const r2d2Image = "Images/R2-D2.jpeg"
    const darthVaderImage = "Images/Darth Vader.jpg"
    const leiaOrganaImage = "Images/Leia Organa.jpeg"
    const owenLarsImage = "Images/Owen Lars.jpg"
    const beruWhitesunLarsImage = "Images/Beru Whitesun lars.jpg"
    const r5d4Image = "Images/R5-D4.jpeg"
    const biggsDarkLighterImage = "Images/Biggs Darklighter.jpeg"
    const obiWanKenobiImage = "Images/Obi-Wan Kenobi.jpeg"
    lukeSkywalkerElement.setAttribute('src', lukeSkyWalkerImage)
    c3poElement.setAttribute('src', c3poImage)
    r2d2Element.setAttribute('src', r2d2Image)
    darthVaderElement.setAttribute('src', darthVaderImage)
    leiaOrganaElement.setAttribute('src', leiaOrganaImage)
    owenLarsElement.setAttribute('src', owenLarsImage)
    beruWhitesunLarsElement.setAttribute('src', beruWhitesunLarsImage)
    r5d4Element.setAttribute('src', r5d4Image)
    biggsDarklighterElement.setAttribute('src', biggsDarkLighterImage)
    obiWanKenobiElement.setAttribute('src', obiWanKenobiImage)


    lukeSkywalkerElement.addEventListener('click', () => {
        let name = document.querySelector('.character-name')
        name.innerText = character[0].name
        let image = document.querySelector(".character-image")
        image.src = lukeSkyWalkerImage
        let birthYear = document.querySelector(".character-birth-year")
        birthYear.innerText = character[0].birth_year
    })

    c3poElement.addEventListener('click', () => {
        let name = document.querySelector('.character-name')
        name.innerText = character[1].name
        let image = document.querySelector(".character-image")
        image.src = c3poImage
        let birthYear = document.querySelector(".character-birth-year")
        birthYear.innerText = character[1].birth_year
    })

    r2d2Element.addEventListener('click', () => {
        let name = document.querySelector('.character-name')
        name.innerText = character[2].name
        let image = document.querySelector(".character-image")
        image.src = r2d2Image
        let birthYear = document.querySelector(".character-birth-year")
        birthYear.innerText = character[2].birth_year
    })

    darthVaderElement.addEventListener('click', () => {
        let name = document.querySelector('.character-name')
        name.innerText = character[3].name
        let image = document.querySelector(".character-image")
        image.src = darthVaderImage
        let birthYear = document.querySelector(".character-birth-year")
        birthYear.innerText = character[3].birth_year
    })

    leiaOrganaElement.addEventListener('click', () => {
        let name = document.querySelector('.character-name')
        name.innerText = character[4].name
        let image = document.querySelector(".character-image")
        image.src = leiaOrganaImage
        let birthYear = document.querySelector(".character-birth-year")
        birthYear.innerText = character[4].birth_year
    })

    owenLarsElement.addEventListener('click', () => {
        let name = document.querySelector('.character-name')
        name.innerText = character[5].name
        let image = document.querySelector(".character-image")
        image.src = owenLarsImage
        let birthYear = document.querySelector(".character-birth-year")
        birthYear.innerText = character[5].birth_year
    })

    beruWhitesunLarsElement.addEventListener('click', () => {
        let name = document.querySelector('.character-name')
        name.innerText = character[6].name
        let image = document.querySelector(".character-image")
        image.src = beruWhitesunLarsImage
        let birthYear = document.querySelector(".character-birth-year")
        birthYear.innerText = character[6].birth_year
    })

    r5d4Element.addEventListener('click', () => {
        let name = document.querySelector('.character-name')
        name.innerText = character[7].name
        let image = document.querySelector(".character-image")
        image.src = r5d4Image
        let birthYear = document.querySelector(".character-birth-year")
        birthYear.innerText = character[7].birth_year
    })

    biggsDarklighterElement.addEventListener('click', () => {
        let name = document.querySelector('.character-name')
        name.innerText = character[8].name
        let image = document.querySelector(".character-image")
        image.src = biggsDarkLighterImage
        let birthYear = document.querySelector(".character-birth-year")
        birthYear.innerText = character[8].birth_year
    })

    obiWanKenobiElement.addEventListener('click', () => {
        let name = document.querySelector('.character-name')
        name.innerText = character[9].name
        let image = document.querySelector(".character-image")
        image.src = obiWanKenobiImage
        let birthYear = document.querySelector(".character-birth-year")
        birthYear.innerText = character[9].birth_year
    })
}