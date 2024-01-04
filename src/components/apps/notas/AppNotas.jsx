const AppNotas = ({cerrarAppNotas}) => {
    const handleClick = () => {
        cerrarAppNotas();
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
            <div className="accesos_directos_window">
                <div className="acceso_directo">
                    <img
                        className="icono_acceso_directo"
                        src={txt_icon}
                        alt=""
                    />
                    <p className="leyenda_acceso_directo">Bienvenido.txt</p>
                </div>
            </div>
        </div>
    );
};

export default AppNotas;
