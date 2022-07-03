import agenda from '../data/agenda.js'; //Conecta ao Banco de Dados

function listarAgenda(){
    const agendaDom = document.getElementById("agenda"); //Pega o elemento no DOM 
    agenda.forEach((element) => { //Percorro minha agenda
        var elementoDiv = document.createElement("div"); // <div> </di>
        elementoDiv.classList.add("atividade-item") // <div class="atividade-item"> </div>
        elementoDiv.appendChild(criarElemento(element.Titulo, "h1"));
        elementoDiv.appendChild(criarElemento(element.Data, "span"));
        elementoDiv.appendChild(criarElemento(element.HoraInico, "p"));
        elementoDiv.appendChild(criarElemento(element.HoraFim, "p"));
        elementoDiv.appendChild(criarElemento(element.Descrição, "p"));
        agendaDom.appendChild(elementoDiv); // <div id="agenda"> <div class="atividade-item"> <h1> Aula de Inglês </h1> <p> 19-06-2022 </p> </div> </div> 
    });
}

listarAgenda();

function criarElemento(textElemento,tag){
    var elementTag = document.createElement(tag); // <h1></h1>
    const textNode = document.createTextNode(textElemento); /// Aula de Inglês
    elementTag.appendChild(textNode); // <h1> Aula de Inglês </h1> 
    return elementTag;
}

