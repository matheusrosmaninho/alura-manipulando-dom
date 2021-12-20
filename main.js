import BotaoConclui from "./components/concluirTarefa.js";
import BotaoDeleta from "./components/deletarTarefa.js";
import {data as helperData} from "./helpers/data.js";

const handleNovoItem = (event) => {
  event.preventDefault();

  const list = document.querySelector("[data-list]");
  const input = document.querySelector("[data-form-input");
  const valor = input.value;

  const calendario = document.querySelector('[data-form-date]')
  let data = calendario.value
  data = helperData(new Date(data)).onlyDateBr()

  const dados = {
    valor, data
  }
  const criaTarefa = criarTarefa(dados)

  list.appendChild(criaTarefa);
  localStorage.setItem('tarefas', JSON.stringify(dados))
  input.value = "";
}

const criarTarefa = ({valor, data}) => {
  const tarefa = document.createElement("li");
  tarefa.classList.add("task");

  const conteudo = `<p class="content">${data} ${valor}</p>`;
  tarefa.innerHTML = conteudo;

  tarefa.appendChild(BotaoConclui());
  tarefa.appendChild(BotaoDeleta());
  return tarefa
};

const novaTarefa = document.querySelector("[data-form-button");

novaTarefa.addEventListener("click", handleNovoItem);