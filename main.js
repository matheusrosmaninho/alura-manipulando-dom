import { handleNovoItem } from "./components/novaTarefa.js";
import { carregaTarefa } from "./components/carregaTarefa.js";

const novaTarefa = document.querySelector("[data-form-button");

novaTarefa.addEventListener("click", handleNovoItem);

carregaTarefa()