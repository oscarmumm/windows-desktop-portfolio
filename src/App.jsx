import "./styles/App.css";
import BarraDeTareas from "./components/BarraDeTareas";
import AccesosDirectosEscritorio from "./components/AccesosDirectosEscritorio";
import {useState} from "react";
import Window from "./components/Window";
import MiPc from "./components/MiPc";
import ListaDeProgramas from "./components/ListaDeProgramas";

function App() {
    const [listaProgramasActive, setListaProgramasActive] = useState(false);
    const [miPcActive, setMiPcActive] = useState(false);

    const abrirMiPc = () => {
        setMiPcActive(true);
    };
    const cerrarMiPc = () => {
        setMiPcActive(false);
    };

    const abrirListaProgramas = () => {
        setListaProgramasActive(true);
    };
    const cerrarListaProgramas = () => {
        setListaProgramasActive(false);
    };

    return (
        <div className="desktop_app">
            <AccesosDirectosEscritorio abrirMiPc={abrirMiPc} />
            <BarraDeTareas
                abrirListaProgramas={abrirListaProgramas}
                cerrarListaProgramas={cerrarListaProgramas}
                listaProgramasActive={listaProgramasActive}
            />
            {miPcActive ? <MiPc cerrarMiPc={cerrarMiPc} /> : null}
            {listaProgramasActive ? <ListaDeProgramas /> : null}
        </div>
    );
}

export default App;
