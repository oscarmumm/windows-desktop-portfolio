import "../../../styles/Window.css";
import "../../../styles/AppNotas.css";
import notas_logo from "../../../assets/icons/notes-notepad-svgrepo-com.svg";
import { useState } from "react";

const AppNotas = ({ cerrarAppNotas }) => {
    const [notas, setNotas] = useState([]);
    const [nuevaNotaActive, setNuevaNotaActive] = useState(false);
    const [titulo, setTitulo] = useState("");
    const [texto, setTexto] = useState("");

    const handleClick = () => {
        cerrarAppNotas();
    };

    const guardarNota = (e) => {
        e.preventDefault();
        setNotas([
            ...notas,
            { id: Date.now().toString(), titulo: titulo, texto: texto },
        ]);
        console.log(notas);
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
                    {notas.length > 0 ? (
                        <p>hay notas</p>// notas.map((el) => <li>{el}</li>)
                    ) : (
                        <p>No hay notas guardadas</p>
                    )}
                </ul>
                <button className="nueva_nota_btn">+</button>
                <form className="app_notas-form">
                    <label htmlFor="titulo"></label>
                    <input
                        onChange={(e) => setTitulo(e.target.value)}
                        className="app_notas-input_titulo"
                        type="text"
                        placeholder="Título..."
                    />
                    <label htmlFor="texto"></label>
                    <textarea
                        onChange={(e) => setTexto(e.target.value)}
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
            </div>
        </div>
    );
};

export default AppNotas;
