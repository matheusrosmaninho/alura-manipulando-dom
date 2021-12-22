import { removeDatasRepetidas } from "../service/dataService.js"
import { criaData } from "./criaData.js"

export const carregaTarefa = () => {
    const lista = document.querySelector('[data-list]')

    const dadosStorage = localStorage.getItem('tarefas')
    const tarefas = JSON.parse(dadosStorage) || []

    lista.innerHTML = ''
    const datasUnicas = removeDatasRepetidas(tarefas)
    datasUnicas.forEach(tarefa => {
        lista.appendChild(criaData(tarefa))
    })
}