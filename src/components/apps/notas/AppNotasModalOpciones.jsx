import './AppNotasModal.css'

const AppNotasModalOpciones = ({cerrarModalOpciones, tituloModal}) => {
    const volver = () => {
        cerrarModalOpciones()
    }
    
    return (
        <div className="modal_pantalla">
            <div className="modal_div">
                <h2 className="modal_titulo">{tituloModal}</h2>
                <div className="modal_btn_div">
                    <button className="modal_btn btn_cyan">Editar</button>
                    <button className="modal_btn btn_orange">Eliminar</button>
                    <button className="modal_btn btn_gray" onClick={volver}>Cancelar</button>
                </div>
            </div>
        </div>
    );
};

export default AppNotasModalOpciones;
