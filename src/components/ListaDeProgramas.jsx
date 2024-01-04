import "../styles/ListaDeProgramas.css";
import clima_logo from '../assets/icons/sun-svgrepo-com.svg'
import calculadora_logo from '../assets/icons/calculator-svgrepo-com.svg'
import notas_logo from '../assets/icons/notes-notepad-svgrepo-com.svg'
import agenda_logo from '../assets/icons/calendar-svgrepo-com.svg'

const ListaDeProgramas = () => {
    return (
        <div className="lista_de_programas">
            <h3 className="lista_de_programas-titulo">Todos los programas</h3>
            <ul>
                <li>
                    <img className="lista_de_programas-icono" src={clima_logo} alt="" />
                    <p>El clima</p>
                </li>
                <li>
                    <img className="lista_de_programas-icono" src={calculadora_logo} alt="" />
                    <p>Calculadora</p>
                </li>
                <li>
                    <img className="lista_de_programas-icono" src={notas_logo} alt="" />
                    <p>Mis Notas</p>
                </li>
                <li>
                    <img className="lista_de_programas-icono" src={agenda_logo} alt="" />
                    <p>Agenda</p>
                </li>
            </ul>
        </div>
    );
};

export default ListaDeProgramas;
