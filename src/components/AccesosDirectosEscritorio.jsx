import mipc_icon from "../assets/icons/monitor-svgrepo-com.svg";
import archivos_icon from '../assets/icons/files-folder-svgrepo-com.svg';
import txt_icon from '../assets/icons/txt-svgrepo-com.svg'
import "../styles/AccesosDirectos.css";

const AccesosDirectosEscritorio = ({abrirMiPc, abrirBienvenido, abrirArchivos}) => {
    const clickEnMiPc = () => {
        abrirMiPc()
    }
    const clickEnArchivos = () => {
        abrirArchivos()
    }
    const clickEnBienvenido = () => {
        abrirBienvenido()
    }
    return (
        <div className="accesos_directos_escritorio">
            <div className="acceso_directo">
                <img
                    className="icono_acceso_directo icono_mipc"
                    src={mipc_icon}
                    alt=""
                    onClick={clickEnMiPc}
                />
                <p className="leyenda_acceso_directo">Mi pc</p>
            </div>
            <div className="acceso_directo">
                <img
                    className="icono_acceso_directo icono_archivos"
                    src={archivos_icon}
                    alt=""
                    onClick={clickEnArchivos}
                />
                <p className="leyenda_acceso_directo">Archivos</p>
            </div>
            <div className="acceso_directo">
                <img
                    className="icono_acceso_directo icono_archivos"
                    src={txt_icon}
                    alt=""
                    onClick={clickEnBienvenido}
                />
                <p className="leyenda_acceso_directo">Bienvenido</p>
            </div>
        </div>
    );
};

export default AccesosDirectosEscritorio;
