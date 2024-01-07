import "../../../styles/Window.css";
import "../notas/AppNotas.css";
import notas_logo from "../../../assets/icons/notes-notepad-svgrepo-com.svg";
import { useState, useContext } from "react";
import { DataContext } from "../../../contexts/DataContext";
import AppNotasForm from "./AppNotasForm";
import AppNotasModalOpciones from "./AppNotasModalOpciones";

const AppNotas = ({ cerrarAppNotas }) => {
    const [nuevaNotaActive, setNuevaNotaActive] = useState(false);
    const { data, setData } = useContext(DataContext);
    const [modalOpciones, setModalOpciones] = useState(false)
    const [tituloModal, setTituloModal] = useState()
    
    const cerrarVentana = () => {
        cerrarAppNotas();
    };

    const abrirOpciones = (titulo) => {
        setTituloModal(titulo)
        setModalOpciones(true)
    }

    const cerrarModalOpciones = () => {
        setModalOpciones(false)
    }

    return (
        <div className="window window_full_screen app_notas">
            <div className="window_btn_container">
                <button className="window_btn window_minimize_btn">—</button>
                <button
                    className="window_btn window_close_btn"
                    onClick={cerrarVentana}
                >
                    ╳
                </button>
            </div>
            <div className="">
                <div className="app_notas-header">
                    <img className="app_notas-logo" src={notas_logo} alt="" />
                    <h3>Mis Notas</h3>
                </div>
                <div className="app_notas-body">
                    <AppNotasForm />

                    <ul className="app_notas-lista_de_notas">
                        {data.dataNotas ? (
                            data.dataNotas.map((el) => (
                                <li
                                    className="app_notas-lista_de_notas-nota"
                                    key={el.id}
                                    onClick={() => abrirOpciones(el.titulo)}
                                >
                                    <h4 className="app_notas-lista_de_notas-nota-titulo">
                                        {el.titulo}
                                    </h4>
                                    <p className="app_notas-lista_de_notas-nota-texto">
                                        {el.texto}
                                    </p>
                                </li>
                            ))
                        ) : (
                            <p>No hay notas guardadas</p>
                        )}
                    </ul>
                </div>
            </div>
            {modalOpciones ? <AppNotasModalOpciones cerrarModalOpciones={cerrarModalOpciones} tituloModal={tituloModal} /> : null}
        </div>
    );
};

export default AppNotas;
