import { useState } from "react";
import "./AppNotasModal.css";
import AppNotasModalAdvertencia from "./AppNotasModalAdvertencia";

const AppNotasModalOpciones = ({ cerrarModalOpciones, notaSeleccionada, eliminarNota, editarNota }) => {
    const [advertencia, setAdvertencia] = useState(false)
    const mostrarAdvertencia = () => {
        setAdvertencia(true)
    }

    const confirmaEliminar = () => {
        eliminarNota()
    }

    const confirmaEdicion = () => {
        editarNota()
    }

    const revocaEliminar = () => {
        setAdvertencia(false)
    }

    const volver = () => {
        cerrarModalOpciones();
    };

    return (
        <div className="modal_pantalla">
            <div className="modal_div">
                <h2 className="modal_titulo">{notaSeleccionada.titulo}</h2>
                <div className="modal_btn_div">
                    <button className="modal_btn btn_cyan" onClick={confirmaEdicion}>Editar</button>
                    <button className="modal_btn btn_orange" onClick={mostrarAdvertencia}>Eliminar</button>
                    <button className="modal_btn btn_gray" onClick={volver}>
                        Cancelar
                    </button>
                </div>
            </div>
            {advertencia ? <AppNotasModalAdvertencia
                confirmaEliminar={confirmaEliminar}
                revocaEliminar={revocaEliminar}
            /> : null}
        </div>
    );
};

export default AppNotasModalOpciones;
