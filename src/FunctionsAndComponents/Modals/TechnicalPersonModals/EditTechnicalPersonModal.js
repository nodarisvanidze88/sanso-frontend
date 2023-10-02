import Modal from "react-modal"
import { PutData } from '../../Crud/PutData'
import { Urls } from '../../URLS/urls'
import { useEffect, useState } from "react"
import './confirmationmodal.css'

Modal.setAppElement('#root')

const customStyles = {
    content: {
        width: "800px",
        height: "600px",
        margin: "auto",
    },
};
export default function EditTechnicalPersonModal({ isOpen, onRequestClose, edit, refresh }) {
    const [editItem, setEditItem] = useState([])
    const [formError, setFormError] = useState(false)
    const [isValidFiled, setValidField] = useState(true)

    useEffect(() => {
        if (edit) {
            setEditItem(edit);
        }
    }, [edit]);


    const handleInputChanges = (e) => {
        const { name, value } = e.target;
        setEditItem({
            ...editItem,
            [name]: value,
        })
    }
    const handelFormValid = () => {
        const newErrors = {}
        let isValid = true

        if (!editItem.person_name) {
            newErrors.person_name = "აუცილებელია ტექნიკოსის სახელის შეყვანა"
            isValid = false
        }
        setFormError(newErrors)
        setValidField(isValid)
        return isValid
    }
    const handelSave = async () => {
        if (handelFormValid()) {
            await PutData(Urls['TechnicalPerson'], editItem.id, editItem)
            refresh()
            onRequestClose(false)
        }
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Edit Technical Person Modal"
            style={customStyles}
        >
            <div className="add-modal-container">
                <h2>ტექნიკოსის რედაქტირება</h2>
                <div className="field-containers">
                    <input type="text"
                        name="person_name"
                        value={editItem.person_name}
                        onChange={handleInputChanges}
                        placeholder="ტექნიკოსის სახელი"
                        required />
                    {!isValidFiled &&
                        (<span className="newCustomerError">{formError.person_name}</span>)}
                </div>
                <div className="add-customer-modal-butons">
                    <div className="modal-yes-button">
                        <button onClick={handelSave} className="btn btn-danger">Save</button>
                    </div>
                    <div className="modal-no-button">
                        <button onClick={onRequestClose} className="btn btn-primary">Cancel</button>
                    </div>
                </div>
            </div>
        </Modal>
    )
}