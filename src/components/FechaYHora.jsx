import { useEffect, useState } from "react";
import '../styles/FechaYHora.css'

const FechaYHora = () => {
    let fecha
    let hora
    let min
    const [horaActual, setHoraActual] = useState("");
    const [fechaActual, setFechaActual] = useState("")

    const actualizarHora = () => {
        let date = new Date();
        let hora = date.getHours();
        let min = date.getMinutes();
        min = min < 10 ? '0'+min : min
        setHoraActual(hora + ':' + min);
        console.log('actualiza hora')
    };

    const actualizarFecha = () => {
        let date = new Date().toLocaleDateString();
        setFechaActual(date)
    }
    
    useEffect(() => {
        actualizarFecha()
        actualizarHora()
    }, [])
    
    useEffect(() => {
        setInterval(actualizarHora, 1000);
        setInterval(actualizarFecha, 1000);
    })

    return (
        <div className="fecha_y_hora">
            <div className="hora">{horaActual}</div>
            <div className="fecha">{fechaActual}</div>
        </div>
    );
};

export default FechaYHora;
