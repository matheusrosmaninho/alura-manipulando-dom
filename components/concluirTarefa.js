const concluirTarefa = (atualiza, id) => {
  const dadosStorage = localStorage.getItem("tarefas");
  const tarefas = JSON.parse(dadosStorage) || [];

  tarefas[id].concluida = !tarefas[id].concluida;
  localStorage.setItem("tarefas", JSON.stringify(tarefas));

  atualiza();
};

const BotaoConclui = (atualiza, id) => {
  const botaoConclui = document.createElement("button");
  botaoConclui.classList.add("check-button");
  botaoConclui.innerText = "concluir";
  botaoConclui.addEventListener("click", () => concluirTarefa(atualiza, id));
  return botaoConclui;
};

export default BotaoConclui;
