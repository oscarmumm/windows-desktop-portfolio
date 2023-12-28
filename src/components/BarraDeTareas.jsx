import '../styles/BarraDeTareas.css'
import logo from '../assets/icons/windows-174-svgrepo-com.svg'
import FechaYHora from './FechaYHora'

const BarraDeTareas = () => {
  return (
    <div className="barra_de_tareas">
        <div>
            <img className='logo' src={logo} alt="" />
        </div>
        <div>
            <FechaYHora />
        </div>
    </div>
  )
}

export default BarraDeTareas