document.addEventListener("DOMContentLoaded", () => {
    catFactz()
    const input = document.querySelector('form')
    input.addEventListener('submit', givenNumber)
    const click = document.getElementById("clearButton")
    click.addEventListener('click', clearFact)
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
};

function givenNumber(e) {
    e.preventDefault();
    const input = document.getElementById("getYourFact")
    const listed = document.getElementById("yourFactz")
    const factAppears = document.createElement('p')
    document.body.appendChild(factAppears)
    listed.appendChild(factAppears)
    

        if (input.value < 6 && input.value > 0) {
            factAppears.innerHTML = (allFactz[input.value - 1] + "<h4>Want more? Click below to clear and submit a new number!</h4>")
        } else {
            factAppears.innerHTML = ("Try Again :)")
        }
    return (input.value = "") 
};

function clearFact(e) {
    // const click = document.getElementById("clearButton")
    // click.addEventListener('click', clearFact)
    const clear = document.querySelector('p')
    clear.addEventListener('click', clearFact)
    clear.remove(clear)
    alert('You clicked me!')
    
}
