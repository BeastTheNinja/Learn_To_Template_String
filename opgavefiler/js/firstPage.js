/* Opgave 1*/


// din kode her
const myName = 'John Doe'
const years = 15
const besked = `Hej ${myName} du har nu arbejdet i vores virksomhed i ${years} år`
console.log(besked)
const message = document.getElementById('message')
message.innerHTML = besked
/* Opgave 2*/


// din kode her
const produktListe = document.getElementById('produktListe');
const produkt = document.getElementsByClassName(
    'produkt'
)
const myData=[
            { "navn": "T-shirt",
            "beskrivelse": "En t-shirt lavet af bomuld",
            "pris": 99 },
            { "navn": "Jeans",
            "beskrivelse": "Blå denim jeans med straight fit",
            "pris": 299
            },
            { "navn": "Hættetrøje",
            "beskrivelse": "En grå hættetrøje med lynlås",
            "pris": 199 }
            ];

const createProductList = {
    template: ''
}

for (let i = 0; i < myData.length; i++) {
    createProductList.template += `
   <article class="produkt">
        <h2>${myData[i].navn}</h2>
        <p>${myData[i].beskrivelse}</p>
        <p>Pris: ${myData[i].pris} kr.</p>
   </article>
`;
}

produktListe.innerHTML = createProductList.template;


/* Opgave 3 - skriv videre på koden her: */

// array med person data
const myPersons = [];


// find form elementer
const myForm = document.getElementById('formular');
const submitButton = document.getElementById('indsend-knap');
const personList = document.getElementById('person-liste');

// arrow function submitbutton

 submitButton.addEventListener('click', (event) => {
        event.preventDefault();
        const myFormFelter = myForm.querySelectorAll('input');

        // Tilføj person til array
        myPersons.push({
        navn: myFormFelter[0].value,
        alder: myFormFelter[1].value,
        });

        // Sorter listen efter alder og vis den på siden
        const sorteretMyPersons = sorterEfterAlder(myPersons);
        showList(sorteretMyPersons);
        });

        // view code
        function showList(sorteretMyPersons) {
        let html = '';
        sorteretMyPersons.map((person) => {
        // html template.
        html += `<li>${person.navn} er ${person.alder} år gammel.</li>`;
        });
        personList.innerHTML = html;
        }

        // Funktion til at sortere listen efter alder
        function sorterEfterAlder(myPersons) {
        return myPersons.sort((a, b) => a.alder - b.alder);
        }
    