import { useState, useContext, useEffect } from "react";
import { DataContext } from "../../../contexts/DataContext";
import AppNotasModalTituloVacio from "./AppNotasModalTituloVacio";

const AppNotasForm = ({ notaSeleccionada, modoEdicion, cerrarModoEdicion }) => {
    const { data, setData } = useContext(DataContext);
    const notas = data.dataNotas;
    const [modalTituloVacio, setModalTituloVacio] = useState(false);
    const [titulo, setTitulo] = useState("");
    const [texto, setTexto] = useState("");

    const cerrarModal = () => {
        setModalTituloVacio(false);
    };

    const guardarNota = (e) => {
        e.preventDefault();
        if (titulo.trim() === "") {
            setModalTituloVacio(true);
        } else {
            let nuevaNota = {
                id: Date.now().toString(),
                titulo: titulo,
                texto: texto,
            };
            notas.push(nuevaNota);
            let newData = {
                dataNotas: notas,
                dataClima: data.dataClima,
                dataAgenda: data.dataAgenda,
            };
            setData(newData);
            setTitulo("");
            setTexto("");
            console.log(newData);
        }
    };

    useEffect(() => {
        if (notaSeleccionada && modoEdicion) {
            setTitulo(notaSeleccionada.titulo);
            setTexto(notaSeleccionada.texto);
        }
    }, [modoEdicion]);

    const guardarCambios = (e) => {
        e.preventDefault();
        if (titulo.trim() === "") {
            setModalTituloVacio(true);
        } else {
            let notas = data.dataNotas;
            notas.map((el) => {
                if (el.id === notaSeleccionada.id) {
                    el.titulo = titulo;
                    el.texto = texto;
                }
            });
            let newData = {
                dataNotas: notas,
                dataClima: data.dataClima,
                dataAgenda: data.dataAgenda,
            };
            setData(newData);
            setTitulo("");
            setTexto("");
            cerrarModoEdicion();
        }
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

            {!modoEdicion ? (
                <button
                    onClick={(e) => guardarNota(e)}
                    className="app_notas-guardar-btn"
                >
                    Agregar
                </button>
            ) : null}

            {modoEdicion ? (
                <button
                    onClick={(e) => guardarCambios(e)}
                    className="app_notas-guardar-btn"
                >
                    Guardar
                </button>
            ) : null}

            {modalTituloVacio ? (
                <AppNotasModalTituloVacio cerrarModal={cerrarModal} />
            ) : null}
        </form>
    );
};

export default AppNotasForm;
