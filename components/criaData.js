import { Tarefa } from "./novaTarefa.js";

export const criaData = (data) => {
  const dadosStorage = localStorage.getItem("tarefas");
  const tarefas = JSON.parse(dadosStorage) || [];

  const dataTopo = document.createElement("li");
  const conteudo = `<p class="content-data">${data}</p>`;
  dataTopo.innerHTML = conteudo;

  tarefas.forEach((tarefa) => {
    const dia = tarefa.data

    if (dia == data) {
      dataTopo.appendChild(Tarefa(tarefa));
    }
  });
  return dataTopo;
};
