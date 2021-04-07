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
    allFactz = data
    for (let i=0; i < allFactz.length; i++) {
            console.log(`${allFactz[i].text}`)
    }
    return renderFactz()
    // const factz1 = data[0].text
    // const factz2 = data[1].text
    // const factz3 = data[2].text
    // const factz4 = data[3].text
    // const factz5 = data[4].text
    
    //
    //listed.innerHTML = [factz1 , factz2, factz3, factz4, factz5]
    //allFactz = [factz1 , factz2, factz3, factz4, factz5]
};

const listed = document.getElementById("yourFactz")
function givenNumber(e) {
    e.preventDefault();
    let submitter = e.submitter
    //let givenFact = submitter.text

    if (submitter > 6) {
        renderFactz()
    } else {
        return "Try Again :)"
    }
}
listed.appendChild(givenNumber())