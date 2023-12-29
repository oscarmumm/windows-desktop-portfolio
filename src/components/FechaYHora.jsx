import {useEffect, useState} from "react";
import "../styles/FechaYHora.css";

const FechaYHora = () => {
    const formatearHora = (date) => {
        return {
            horas: date.getHours(),
            minutos: date.getMinutes(),
            segundos: date.getSeconds(),
            fecha: date.toLocaleDateString(),
        };
    };

    const [date, setDate] = useState(formatearHora(new Date()));

    useEffect(() => {
        const interval = setInterval(() => {
            setDate(formatearHora(new Date()));
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fecha_y_hora">
            <div className="hora">
                {date.horas}:
                {date.minutos < 10 ? "0" + date.minutos : date.minutos}
            </div>
            <div className="fecha">{date.fecha}</div>
        </div>
    );
};

export default FechaYHora;
