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
    for (let i=0; i < data.length; i++) {
            console.log(`did you know... ${data[i]}`)
            debugger
    }
    return data
    // const factz1 = data[0].text
    // const factz2 = data[1].text
    // const factz3 = data[2].text
    // const factz4 = data[3].text
    // const factz5 = data[4].text
    
    //const listed = document.getElementById("yourFactz")
    //listed.innerHTML = [factz1 , factz2, factz3, factz4, factz5]
    //allFactz = [factz1 , factz2, factz3, factz4, factz5]
};
renderFactz(data)

function givenNumber(e) {
    e.preventDefault();
    let submitter = e.submitter
    let givenFact = submitter.text

    if (givenFact) {
        //is between 1-5
    } else {
        //ask them to try again
    }
}

// function givenNumber(e) {
//     e.preventDefault();
//     fetch(`https://cat-fact.herokuapp.com/facts/`)
//     .then(response => response.json())
//     .then(data => {
//         renderFactz(data)
//         const factz = [data[0].text]
//         const listed = document.getElementById("yourFactz")
//         listed.innerHTML = (factz)
// })
// }

