function Modal(props) {
    return (
        <div className="modal">
            <p>Are you sure ?</p>
            <button type="button" className="btn btn-alt">Cancel</button>
            <button type="button" className="btn">Confirm</button>
        </div>
    )
}
export default Modal;