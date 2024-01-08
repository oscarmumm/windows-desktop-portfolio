const AppNotasModalAdvertencia = ({confirmaEliminar, revocaEliminar}) => {
    const borrar = () => {
        confirmaEliminar()
    }
    const cancelar = () => {
        revocaEliminar()
    }
    return (
    <div className="modal_pantalla">
            <div className="modal_div">
                <h2 className="modal_titulo">¿Está seguro de borrar la nota?</h2>
                <div className="modal_btn_div">
                    <button className="modal_btn btn_orange" onClick={borrar}>
                        Si, eliminar
                    </button>
                    <button className="modal_btn btn_grey" onClick={cancelar}>
                        No, regresar
                    </button>
                </div>
            </div>
        </div>
  )
}

export default AppNotasModalAdvertencia