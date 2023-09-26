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
export default function AddHPModelModal({ isOpen, onRequestClose, refresh }) {
    const [HpformData, setHpformData] = useState({
        model_name_HP: "",
    })
    const [formError, setFormError] = useState({
        model_name_HP: "",
    })
    const [isValidFiled, setValidField] = useState(true)

    const handeChanges = (e) => {
        const { name, value } = e.target;
        setHpformData({
            ...HpformData,
            [name]: value,
        })
    }
    const handelFormValid = () => {
        const newErrors = {}
        let isValid = true

        if (!HpformData.model_name_HP) {
            newErrors.model_name_HP = "აუცილებელია აპარატის მოდელის შეყვანა"
            isValid = false
        }

        setFormError(newErrors)
        setValidField(isValid)
        return isValid
    }

    const handelSaveHPModels = async () => {
        if (handelFormValid()) {
            await PostData(Urls['HPModels'], HpformData)
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
                <h2>თავაკის მოდელის დამატება</h2>
                    <input type="text"
                        name="model_name_HP"
                        value={HpformData.model_name_HP}
                        onChange={handeChanges}
                        placeholder="თავაკის მოდელის დასახელება" 
                        required/>
                    {!isValidFiled && 
                    (<span className="newCustomerError">{formError.model_name_HP}</span>)}
                <div className="add-customer-modal-butons">
                    <div className="modal-yes-button">
                        <button onClick={handelSaveHPModels} className="btn btn-danger">Save</button>
                    </div>
                    <div className="modal-no-button">
                        <button onClick={onRequestClose} className="btn btn-primary">Cancel</button>
                    </div>
                </div>
            </div>
        </Modal>
    )
}