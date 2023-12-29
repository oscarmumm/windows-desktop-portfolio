import mipc_icon from "../assets/icons/monitor-svgrepo-com.svg";
import archivos_icon from '../assets/icons/files-folder-svgrepo-com.svg'
import "../styles/AccesosDirectosEscritorio.css";

const AccesosDirectosEscritorio = ({abrirMiPc}) => {
    const clickEnMiPc = () => {
        abrirMiPc()
    }
    return (
        <div className="accesos_directos_escritorio">
            <div className="acceso_directo">
                <img
                    className="icono_acceso_directo"
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
                    onClick={clickEnMiPc}
                />
                <p className="leyenda_acceso_directo">Archivos</p>
            </div>
        </div>
    );
};

export default AccesosDirectosEscritorio;
