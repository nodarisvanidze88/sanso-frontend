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
export default function AddNewAlmaSystemModal({ isOpen, onRequestClose, refresh }) {
    const [formData, setFormData] = useState({
        model_name: "",
    })
    const [formError, setFormError] = useState({
        model_name: "",
    })
    const [isValidFiled, setValidField] = useState(true)

    const handeChanges = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        })
    }
    const handelFormValid = () => {
        const newErrors = {}
        let isValid = true

        if (!formData.model_name) {
            newErrors.model_name = "აუცილებელია აპარატის მოდელის შეყვანა"
            isValid = false
        }

        setFormError(newErrors)
        setValidField(isValid)
        return isValid
    }

    const handelSave = async () => {
        if (handelFormValid()) {
            await PostData(Urls['AlmaSystemModels'], formData)
            refresh()
            onRequestClose(false)
        }
    }
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Add New Customer Modal"
            style={customStyles}
        >
            <div className="add-modal-container">
                <h2>მოწყობილობის მოდელის დამატება</h2>
                    <input type="text"
                        name="model_name"
                        value={formData.model_name}
                        onChange={handeChanges}
                        placeholder="მოწყობილობის მოდელის დასახელება" 
                        required/>
                    {!isValidFiled && 
                    (<span className="newCustomerError">{formError.model_name}</span>)}
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