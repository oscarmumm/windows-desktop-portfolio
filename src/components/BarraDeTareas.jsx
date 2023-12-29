import "../styles/BarraDeTareas.css";
import logo from "../assets/icons/windows-174-svgrepo-com.svg";
import FechaYHora from "./FechaYHora";

const BarraDeTareas = ({
    listaProgramasActive,
    cerrarListaProgramas,
    abrirListaProgramas,
}) => {
    const clickEnInicio = () => {
        listaProgramasActive ? cerrarListaProgramas() : abrirListaProgramas();
    };
    return (
        <div className="barra_de_tareas">
            <div className="logo_container">
                <img
                    className="logo"
                    src={logo}
                    alt=""
                    onClick={clickEnInicio}
                />
            </div>
            <div>
                <FechaYHora />
            </div>
        </div>
    );
};

export default BarraDeTareas;
