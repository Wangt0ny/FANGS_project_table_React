function EditMenuFormButton(props) {
    let setFormOpen = props.setFormOpen
    let setSwitchForm = props.setSwitchForm

    function newFrom() {
        setFormOpen(true);
        setSwitchForm(false);
    }

    return (
        <div className="plus-icon" onClick={() => newFrom()}>
            <i className="bi bi-plus-lg"></i>
        </div>
    );
}

export default EditMenuFormButton;