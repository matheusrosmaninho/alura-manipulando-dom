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
  const dataOriginal = calendario.value
  const data = helperData(new Date(dataOriginal)).onlyDateBr()
  const hora = helperData(new Date(dataOriginal)).getFullHour()
  const concluida = false

  const dados = {
    valor, data, hora, concluida
  }

  const tarefasAtualizadas = [...tarefas, dados]

  localStorage.setItem('tarefas', JSON.stringify(tarefasAtualizadas))
  input.value = "";
  carregaTarefa()
}

export const Tarefa = ({valor, hora, concluida}, id) => {
  const tarefa = document.createElement("li");

  const conteudo = `<p class="content">${hora} * ${valor}</p>`;

  if(concluida) {
    tarefa.classList.add("done");
  }
  tarefa.classList.add("task");
  tarefa.innerHTML = conteudo;

  tarefa.appendChild(BotaoConclui(carregaTarefa, id));
  tarefa.appendChild(BotaoDeleta(carregaTarefa, id));
  return tarefa
};