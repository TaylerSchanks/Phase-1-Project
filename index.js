document.addEventListener("DOMContentLoaded", () => {
    fetch(" https://fishbase.ropensci.org/species")
        .then(resp => resp.json())
        .then(json => console.log(json))
})