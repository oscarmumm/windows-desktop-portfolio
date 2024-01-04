import "../styles/Window.css";
import pdf_icon from "../assets/icons/pdf-svgrepo-com.svg";

const Archivos = ({cerrarArchivos}) => {
    const handleClick = () => {
        cerrarArchivos();
    }
    return (
        <div className="window">
            <div className="window_btn_container">
                <button className="window_btn window_minimize_btn">—</button>
                <button
                    className="window_btn window_close_btn"
                    onClick={handleClick}>
                    X
                </button>
            </div>
            <div className="accesos_directos_window">
                <div className="acceso_directo">
                    <img
                        className="icono_acceso_directo"
                        src={pdf_icon}
                        alt=""
                    />
                    <p className="leyenda_acceso_directo">Curriculum Vitae.pdf</p>
                </div>
            </div>
        </div>
    );
};

export default Archivos;
