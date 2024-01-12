import "./AppClima.css";
import icono_humedad from "./iconos_clima/humidity-svgrepo-com.svg";
import icono_ubicacion from "./iconos_clima/location-pin-alt-1-svgrepo-com.svg";
import icono_presion from "./iconos_clima/pressure-svgrepo-com.svg";
import icono_temperatura from "./iconos_clima/temperature-low-svgrepo-com.svg";
import icono_visibilidad from "./iconos_clima/visibility-svgrepo-com.svg";
import icono_viento from "./iconos_clima/wind-svgrepo-com.svg";
import icono_01d from "./iconos_clima/01d.svg";

const AppClima = ({ cerrarAppClima }) => {
    const cerrarVentana = () => {
        cerrarAppClima();
    };
    return (
        <div className="window window_full_screen app_clima">
            <div className="window_btn_container">
                <button className="window_btn window_minimize_btn">—</button>
                <button
                    className="window_btn window_close_btn"
                    onClick={cerrarVentana}
                >
                    ╳
                </button>
            </div>
            <div className="generic_app">
                <header className="app_clima_header">
                    <input
                        className="app_clima_buscador"
                        type="text"
                        placeholder="ingrese una ubicación"
                    />
                </header>
                <div className="clima">
                    <div className="clima_info-principal">
                        <img className="clima_icono" src={icono_01d} alt="" />
                        <p className="clima_temperatura">26°C</p>
                        <p className="clima_sensacion-termica">ST: 27°C</p>
                        <p className="clima_ubicacion">Caballito</p>
                        <p className="clima_descripcion">Cielo despejado</p>
                    </div>
                    <div className="clima_tarjetas">
                        <div className="clima_tarjeta-info">
                            <img
                                className="clima_tarjeta-info_icono"
                                src={icono_humedad}
                                alt=""
                            />
                            <p className="clima_humedad">60%</p>
                        </div>
                        <div className="clima_tarjeta-info">
                            <img
                                className="clima_tarjeta-info_icono"
                                src={icono_presion}
                                alt=""
                            />
                            <p className="clima_presion">1024 hpa</p>
                        </div>
                        <div className="clima_tarjeta-info">
                            <img
                                className="clima_tarjeta-info_icono"
                                src={icono_visibilidad}
                                alt=""
                            />
                            <p className="clima_visibilidad">10 km</p>
                        </div>
                        <div className="clima_tarjeta-info">
                            <img
                                className="clima_tarjeta-info_icono"
                                src={icono_viento}
                                alt=""
                            />
                            <p className="clima_viento">32 km/h</p>
                        </div>
                    </div>
                </div>
                <div className="pronostico"></div>
            </div>
        </div>
    );
};

export default AppClima;
