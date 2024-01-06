import { useState, useContext } from "react";
import { DataContext } from "../../../contexts/DataContext";

const AppNotasForm = () => {
    const {data, setData} = useContext(DataContext)
    const notas = data.dataNotas
    const [titulo, setTitulo] = useState("");
    const [texto, setTexto] = useState("");
    const guardarNota = (e) => {
        e.preventDefault();
        let nuevaNota = { id: Date.now().toString(), titulo: titulo, texto: texto } 
        notas.push(nuevaNota)
        let newData = {
            dataNotas: notas,
            dataClima: data.dataClima,
            dataAgenda: data.dataAgenda
        }
        setData(newData);
        setTitulo('')
        setTexto('')
        console.log(newData)
    };
    return (
        <form className="app_notas-form">
            <label htmlFor="titulo"></label>
            <input
                onChange={(e) => setTitulo(e.target.value)}
                value={titulo}
                className="app_notas-input_titulo"
                type="text"
                placeholder="Título..."
            />
            <label htmlFor="texto"></label>
            <textarea
                onChange={(e) => setTexto(e.target.value)}
                value={texto}
                className="app_notas-textarea"
                name="texto"
                id=""
                placeholder="Escribe tu nota..."
            ></textarea>
            <button
                onClick={(e) => guardarNota(e)}
                className="app_notas-guardar-btn"
            >
                Guardar
            </button>
        </form>
    );
};

export default AppNotasForm;
