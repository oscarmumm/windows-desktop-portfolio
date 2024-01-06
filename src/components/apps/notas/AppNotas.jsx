import "../../../styles/Window.css";
import "../notas/AppNotas.css";
import notas_logo from "../../../assets/icons/notes-notepad-svgrepo-com.svg";
import { useState, useContext } from "react";
import { DataContext } from "../../../contexts/DataContext";
import AppNotasForm from "./AppNotasForm";

const AppNotas = ({ cerrarAppNotas }) => {
    const [nuevaNotaActive, setNuevaNotaActive] = useState(false);
    const {data, setData} = useContext(DataContext)
    const handleClick = () => {
        cerrarAppNotas();
    };

    return (
        <div className="window window_full_screen app_notas">
            <div className="window_btn_container">
                <button className="window_btn window_minimize_btn">—</button>
                <button
                    className="window_btn window_close_btn"
                    onClick={handleClick}
                >
                    ╳
                </button>
            </div>
            <div className="">
                <div className="app_notas-header">
                    <img className="app_notas-logo" src={notas_logo} alt="" />
                    <h3>Mis Notas</h3>
                </div>
                <ul className="app_notas-lista_de_notas">
                    {data.dataNotas ? (
                        data.dataNotas.map((el) => (
                            <li key={el.id}>
                                <h4>{el.titulo}</h4>
                                <p>{el.texto}</p>
                            </li>
                        ))
                    ) : (
                        <p>No hay notas guardadas</p>
                    )}
                </ul>
                <button className="nueva_nota_btn">+</button>
                <AppNotasForm />
            </div>
        </div>
    );
};

export default AppNotas;
