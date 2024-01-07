import "./AppNotasModal.css";

const AppNotasModalTituloVacio = ({cerrarModal}) => {
    const volver = () => {
        cerrarModal();
    };
    return (
        <div className="modal_pantalla">
            <div className="modal_div">
                <h2 className="modal_titulo">Debe agregar un título</h2>
                <div className="modal_btn_div">
                    <button className="modal_btn btn_cyan" onClick={volver}>
                        Volver
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AppNotasModalTituloVacio;
