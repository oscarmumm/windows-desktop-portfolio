import '../styles/Window.css'
import '../styles/Bienvenido.css'

const Bienvenido = ({cerrarBienvenido}) => {
    const handleClick = () => {
        cerrarBienvenido();
    }
    return (
        <div className="window">
            <div className="window_btn_container">
                <button className="window_btn window_minimize_btn">—</button>
                <button
                    className="window_btn window_close_btn"
                    onClick={handleClick}>
                    X
                </button>
            </div>
            <div className="bienvenido_txt">
                <h1>Bienvenido a mi portfolio!</h1>
                <p>En este portfolio trato de imitar un poco la interfaz de Windows 10, y a la vez incorporar aplicaciones...</p>
                <p>Te invito a explorar cada ícono, tanto del escritorio como del menú inicio</p>
                <p>Oscar</p> 
            </div>
        </div>
    );
};

export default Bienvenido;
