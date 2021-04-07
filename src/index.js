document.addEventListener("DOMContentLoaded", () => {
    catFactz()
    let input = document.querySelector('form')
    input.addEventListener('submit', givenNumber)
});

function catFactz() {
    fetch(`https://cat-fact.herokuapp.com/facts/`)
    .then(response => response.json())
    .then(data => {
        renderFactz(data)
    });
}

let allFactz 
function renderFactz(data) {
    allFactz = data.map(fact => fact.text)
    console.log(allFactz)
};

const listed = document.getElementById("yourFactz")
function givenNumber(e) {
    e.preventDefault();
    let input = document.getElementById("getYourFact")
        if (0 < input.value > 6) {
            return allFactz
        } else {
            return "Try Again :)"
        }   
}
