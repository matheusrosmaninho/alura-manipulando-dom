const deletarTarefa = (atualiza, id) => {
  const dadosStorage = localStorage.getItem('tarefas')
  const tarefas = JSON.parse(dadosStorage) || []
  tarefas.splice(id, 1)

  localStorage.setItem('tarefas', JSON.stringify(tarefas))
  atualiza()
};

const BotaoDeleta = (atualiza, id) => {
  const botaoDeleta = document.createElement("button");
  botaoDeleta.innerText = "deletar";
  botaoDeleta.addEventListener("click", () => deletarTarefa(atualiza, id));
  return botaoDeleta;
};

export default BotaoDeleta;
