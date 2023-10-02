import React, { useState } from "react";
import Modal from "react-modal"
import { Urls } from '../../URLS/urls'
import {PostData} from '../../Crud/PostData'
import './confirmationmodal.css'
Modal.setAppElement('#root')

const customStyles = {
    content: {
        width: "800px",
        height: "600px",
        margin: "auto",
    },
};
export default function AddTechnicalPersonModal({ isOpen, onRequestClose, refresh }) {
    const [technicalPerson, settechnicalPerson] = useState({
        person_name: "",
    })
    const [formError, setFormError] = useState({
        person_name: "",
    })
    const [isValidFiled, setValidField] = useState(true)

    const handeChanges = (e) => {
        const { name, value } = e.target;
        settechnicalPerson({
            ...technicalPerson,
            [name]: value,
        })
    }
    const handelFormValid = () => {
        const newErrors = {}
        let isValid = true

        if (!technicalPerson.person_name) {
            newErrors.person_name = "აუცილებელია სახელის შეყვანა"
            isValid = false
        }

        setFormError(newErrors)
        setValidField(isValid)
        return isValid
    }

    const handleSaveTechnicalPerson = async () => {
        if (handelFormValid()) {
            await PostData(Urls['TechnicalPerson'], technicalPerson)
            refresh()
            onRequestClose(false)
        }
    }
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Add New Technical Person Modal"
            style={customStyles}
        >
            <div className="add-modal-container">
                <h2>ტექნიკოსის დამატება</h2>
                    <input type="text"
                        name="person_name"
                        value={technicalPerson.person_name}
                        onChange={handeChanges}
                        placeholder="ტექნიკოსის სახელი" 
                        required/>
                    {!isValidFiled && 
                    (<span className="newCustomerError">{formError.person_name}</span>)}
                <div className="add-customer-modal-butons">
                    <div className="modal-yes-button">
                        <button onClick={handleSaveTechnicalPerson} className="btn btn-danger">Save</button>
                    </div>
                    <div className="modal-no-button">
                        <button onClick={onRequestClose} className="btn btn-primary">Cancel</button>
                    </div>
                </div>
            </div>
        </Modal>
    )
}