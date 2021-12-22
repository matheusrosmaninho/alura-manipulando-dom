import BotaoConclui from "./concluirTarefa.js";
import BotaoDeleta from "./deletarTarefa.js";
import {data as helperData} from "../helpers/data.js";
import { carregaTarefa } from "./carregaTarefa.js";

export const handleNovoItem = (event) => {
  event.preventDefault();
  const dadosLocal = localStorage.getItem('tarefas')
  const tarefas = JSON.parse(dadosLocal) || []

  const input = document.querySelector("[data-form-input");
  const valor = input.value;

  const calendario = document.querySelector('[data-form-date]')
  let data = calendario.value
  data = helperData(new Date(data)).onlyDateBr()

  const dados = {
    valor, data
  }

  const tarefasAtualizadas = [...tarefas, dados]

  localStorage.setItem('tarefas', JSON.stringify(tarefasAtualizadas))
  input.value = "";
  carregaTarefa()
}

export const Tarefa = ({valor, data}) => {
  const tarefa = document.createElement("li");
  tarefa.classList.add("task");

  const conteudo = `<p class="content">${data} ${valor}</p>`;
  tarefa.innerHTML = conteudo;

  tarefa.appendChild(BotaoConclui());
  tarefa.appendChild(BotaoDeleta());
  return tarefa
};