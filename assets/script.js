
async function fetchData (id) {
    
    try {

        let response = await fetch("https://swapi.dev/api/people/" + id )

        const data = await response.json();
        
        injectCard(data, id)
    }

    catch (error){
        console.error(error)
    }

};

function injectCard(character, id){
    
    const {name, height, mass} = character

    let cardHTML =  `
                    <div class="card">
                        <h3>${name}</h3>
                        <p>Height: ${height} m. | Mass: ${mass} kg.</p>
                    </div>
    `;

    if (id <= 5) {
        const spanPop = document.querySelector("#spanPop");
    
        const handleMouseOver = function() {
            document.getElementById('popular').innerHTML += cardHTML;
            spanPop.removeEventListener('mouseover', handleMouseOver); // Remover el evento
        };
    
        spanPop.addEventListener('mouseover', handleMouseOver);
    
    } else if (id > 5 && id <= 10) {
        const spanSec = document.querySelector("#spanSec");
    
        const handleMouseOver = function() {
            document.getElementById('secondary').innerHTML += cardHTML;
            spanSec.removeEventListener('mouseover', handleMouseOver); // Remover el evento
        };
    
        spanSec.addEventListener('mouseover', handleMouseOver);
    
    } else if (id > 10 && id <= 15) {
        const spanOth = document.querySelector("#spanOth");
    
        const handleMouseOver = function() {
            document.getElementById('others').innerHTML += cardHTML;
            spanOth.removeEventListener('mouseover', handleMouseOver); // Remover el evento
        };
    
        spanOth.addEventListener('mouseover', handleMouseOver);
    
    } else {
        alert('Unable to show character.');
    }

};

function Iterations(){

    let count = 1
    for (let i = 1; i <= 15; i++){
        fetchData(count)
        count++
    }
    return
}


Iterations()
