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

function givenNumber(e) {
    e.preventDefault();
    const listed = document.getElementById("yourFactz")
    const input = document.getElementById("getYourFact")
        if (input.value < 6 && input.value > 0) {
           console.log(allFactz[input.value - 1])
        } else {
            console.log("Try Again :)")
        }   
}
