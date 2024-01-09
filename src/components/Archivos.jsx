import "../styles/Window.css";
import pdf_icon from "../assets/icons/pdf-svgrepo-com.svg";
import folder_icon from '../assets/icons/folder-svgrepo-com.svg'

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
                    ╳
                </button>
            </div>
            <div className="window_archivos">
                <div className="acceso_directo_window">
                    <img
                        className="icono_acceso_directo"
                        src={pdf_icon}
                        alt=""
                    />
                    <p className="leyenda_acceso_directo">Curriculum Vitae</p>
                </div>
                <div className="acceso_directo_window">
                    <img
                        className="icono_acceso_directo"
                        src={folder_icon}
                        alt=""
                    />
                    <p className="leyenda_acceso_directo">Certificaciones</p>
                </div>
            </div>
        </div>
    );
};

export default Archivos;
