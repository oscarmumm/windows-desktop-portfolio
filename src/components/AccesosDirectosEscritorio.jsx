import mypc_icon from "../assets/icons/monitor-svgrepo-com.svg";
import "../styles/AccesosDirectosEscritorio.css";

const AccesosDirectosEscritorio = () => {
    return (
        <div className="accesos_directos_escritorio">
            <div className="acceso_directo">
                <img className="icono_acceso_directo" src={mypc_icon} alt="" />
                <p className="leyenda_acceso_directo">Mi pc</p>
            </div>
        </div>
    );
};

export default AccesosDirectosEscritorio;
