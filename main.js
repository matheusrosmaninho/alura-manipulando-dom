import BotaoConclui from "./components/concluirTarefa.js";
import BotaoDeleta from "./components/deletarTarefa.js";

const criarTarefa = (event) => {
  event.preventDefault();

  const list = document.querySelector("[data-list]");
  const input = document.querySelector("[data-form-input");
  const valor = input.value;

  const tarefa = document.createElement("li");
  tarefa.classList.add("task");

  const conteudo = `<p class="content">${valor}</p>`;
  tarefa.innerHTML = conteudo;

  tarefa.appendChild(BotaoConclui());
  tarefa.appendChild(BotaoDeleta());
  list.appendChild(tarefa);

  input.value = "";
};

const novaTarefa = document.querySelector("[data-form-button");

novaTarefa.addEventListener("click", criarTarefa);