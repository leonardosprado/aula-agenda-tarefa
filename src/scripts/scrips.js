import agenda from '../data/agenda.js'; //Conecta ao Banco de Dados

console.log("Hello World");

function listarAgenda(){
    const agendaDom = document.getElementById("agenda"); //Pega o elemento no DOM 
 
    agenda.forEach((element,index) => { //Percorro minha agenda
        var elementoDiv = document.createElement("div"); // <div> </di>
        elementoDiv.classList.add("atividade-item") // <div class="atividade-item"> </div>

        // ---- 
        var elementTitle = document.createElement("h1"); // <h1></h1>
        const textNode = document.createTextNode(element.Titulo); /// Aula de Inglês
        elementTitle.appendChild(textNode); // <h1> Aula de Inglês </h1> 
        
        var elementData = document.createElement("p"); // <p></p>
        var textNodeData = document.createTextNode(element.Data); //19-06-2022
        elementData.appendChild(textNodeData) // <p> 19-06-2022 </p>

        var elementHoraInico = document.createElement("p");
        var textNodeHoraInicio = document.createTextNode(element.HoraInico);
        elementHoraInico.appendChild(textNodeHoraInicio)

        var elementHoraFim = document.createElement("p");
        var textNodeHoraFim = document.createTextNode(element.HoraFim);
        elementHoraFim.appendChild(textNodeHoraFim)

        var elementDescrição = document.createElement("p");
        var textNodeDescricao = document.createTextNode(element.Descrição);
        elementDescrição.appendChild(textNodeDescricao);

        elementoDiv.appendChild(elementTitle) // <div> <h1> Aula de Inglês </h1> </div>
        elementoDiv.appendChild(elementData) // <div class="atividade-item"> <h1> Aula de Inglês </h1> <p> 19-06-2022 </p> </div>
        elementoDiv.appendChild(elementHoraInico)
        elementoDiv.appendChild(elementHoraFim)
        elementoDiv.appendChild(elementDescrição)

        agendaDom.appendChild(elementoDiv); // <div id="agenda"> <div class="atividade-item"> <h1> Aula de Inglês </h1> <p> 19-06-2022 </p> </div> </div> 
        
    });
    console.log("TERMINEI")
}

listarAgenda();

// for (let index = 0; index < agenda.length; index++) {
//     const element = agenda[index];
//     console.log(element);
// }

