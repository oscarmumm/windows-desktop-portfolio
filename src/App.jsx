import "./styles/App.css";
import BarraDeTareas from "./components/BarraDeTareas";
import AccesosDirectosEscritorio from "./components/AccesosDirectosEscritorio";
import {useState} from "react";
import Window from "./components/Window";
import MiPc from "./components/MiPc";
import ListaDeProgramas from "./components/ListaDeProgramas";
import Bienvenido from "./components/Bienvenido";
import Archivos from "./components/Archivos";
import AppNotas from "./components/apps/notas/AppNotas";

function App() {
    const [listaProgramasActive, setListaProgramasActive] = useState(false);
    const [miPcActive, setMiPcActive] = useState(false);
    const [bienvenidoActive, setBienvenidoActive] = useState(false);
    const [archivosActive, setArchivosActive] = useState(false);
    const [appNotasActive, setAppNotasActive] = useState(false)

    const abrirMiPc = () => {
        setMiPcActive(true);
    };
    const cerrarMiPc = () => {
        setMiPcActive(false);
    };

    const abrirArchivos = () => {
        setArchivosActive(true);
    };
    const cerrarArchivos = () => {
        setArchivosActive(false);
    };

    const abrirBienvenido = () => {
        setBienvenidoActive(true);
    };
    const cerrarBienvenido = () => {
        setBienvenidoActive(false);
    };
    
    const abrirAppNotas = () => {
        setAppNotasActive(true);
        setListaProgramasActive(false)
    };
    const cerrarAppNotas = () => {
        setAppNotasActive(false);
    };

    const abrirListaProgramas = () => {
        setListaProgramasActive(true);
    };
    const cerrarListaProgramas = () => {
        setListaProgramasActive(false);
    };

    return (
        <div className="desktop_app">
            <AccesosDirectosEscritorio
                abrirMiPc={abrirMiPc}
                abrirBienvenido={abrirBienvenido}
                abrirArchivos={abrirArchivos}
            />
            <BarraDeTareas
                abrirListaProgramas={abrirListaProgramas}
                cerrarListaProgramas={cerrarListaProgramas}
                listaProgramasActive={listaProgramasActive}
            />
            {miPcActive ? <MiPc cerrarMiPc={cerrarMiPc} /> : null}
            {bienvenidoActive ? (
                <Bienvenido cerrarBienvenido={cerrarBienvenido} />
            ) : null}
            {archivosActive ? <Archivos cerrarArchivos={cerrarArchivos} /> : null}
            {appNotasActive ? <AppNotas cerrarAppNotas={cerrarAppNotas} /> : null}
            {listaProgramasActive ? <ListaDeProgramas abrirAppNotas={abrirAppNotas} /> : null}
        </div>
    );
}

export default App;
