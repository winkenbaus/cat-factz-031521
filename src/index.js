document.addEventListener("DOMContentLoaded", () => {
    catFactz()
    const input = document.querySelector('form')
    input.addEventListener('submit', givenNumber)
    const click = document.getElementById("clearButton")
    click.addEventListener('click', clearFact)
    const secret = document.getElementById("secretButton")
    secret.addEventListener('click', secretButton)
    const count = document.getElementById("counter")
    count.addEventListener('click', counterButton, counter)
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
    allFactz = data.map(fact => {
        return fact.text
    })
};


function givenNumber(e) {
    e.preventDefault();
    const input = document.getElementById("getYourFact")
    const listed = document.getElementById("yourFactz")
    const factAppears = document.createElement('li'); factAppears.id = 'factz'
    const checked = document.getElementById("factzListed")
    document.body.appendChild(factAppears)
    listed.appendChild(factAppears)

        if (input.value == 6) {
            factAppears.innerHTML = (allFactz)
        } else if (input.value < 6 && input.value > 0) {
            factAppears.innerHTML = allFactz[input.value - 1] + "<h4>Want more? Click below to clear and submit a new number!</h4>"
        } else {
            factAppears.innerHTML = ("Op! You already have that fact! Or purrhaps the wrong number? Try Again :)")
        };
    return (input.value = "")
};

function clearFact(e) {
    const clear = document.getElementById("yourFactz")
    clear.innerHTML = "";
};

function secretButton(e) {
    alert("Enter 6 and have all factz display at the same time!!")
}

let counter = 0
function counterButton(e, counted){
    counter++;
    console.log(`button has been clicked ${counter} times`)
}