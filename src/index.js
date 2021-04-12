document.addEventListener("DOMContentLoaded", () => {
    catFactz()
    const input = document.querySelector('form')
    input.addEventListener('submit', givenNumber)
    const click = document.getElementById("clearButton")
    click.addEventListener('click', clearFact)
    const secret = document.getElementById("secretButton")
    secret.addEventListener('click', secretButton)
});

function catFactz() {
    fetch(`https://cat-fact.herokuapp.com/facts/`)
    .then(response => response.json())
    .then(data => {
        renderFactz(data)
    });
};

let allFactz 
function renderFactz(data) {
    allFactz = data.map(fact => fact.text)
};


function givenNumber(e) {
    e.preventDefault();
    const input = document.getElementById("getYourFact")
    const listed = document.getElementById("yourFactz")
    const factAppears = document.createElement('li'); factAppears.id = 'factz'
    document.body.appendChild(factAppears)
    listed.appendChild(factAppears)

    let alreadyListed = 0
    function filterCheck(fact) {
        if (factz[input.value -1] && factz[input.value -1] < 6){
        return true
    }
    alreadyListed++
    return false
}

        if (filterCheck(factz)) {
            factAppears.innerHTML = ("Op! You already have that fact!")
        } else if (input.value < 6 && input.value > 0) {
            factAppears.innerHTML = (allFactz[input.value - 1] + "<h4>Want more? Click below to clear and submit a new number!</h4>")
        } else {
            factAppears.innerHTML = ("Try Again :)")
        };
    return (input.value = "")
};

function clearFact(e) {
    const clear = document.getElementById("yourFactz")
    clear.innerHTML = ' ';
};

function secretButton(e) {
    alert("If you do not press the 'clear' button, you can select numbers 1, 2, 3, 4, and 5 and have all factz display at the same time!!")
}