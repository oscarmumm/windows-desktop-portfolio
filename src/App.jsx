import './styles/App.css'
import BarraDeTareas from './components/BarraDeTareas'
import AccesosDirectosEscritorio from './components/AccesosDirectosEscritorio'

function App() {

  return (
    <div className='desktop_app'>
      <AccesosDirectosEscritorio />
      <BarraDeTareas />
    </div>
  )
}

export default App
