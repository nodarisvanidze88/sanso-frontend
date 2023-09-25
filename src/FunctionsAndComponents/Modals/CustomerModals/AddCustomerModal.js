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
export default function AddNewCustomerModal({ isOpen, onRequestClose, refresh }) {
    const [formData, setFormData] = useState({
        internal_id: "",
        name: "",
        indetification_code: "",
        address: "",
        clinic_name: "",
        contact_person: "",
        contact_person_mobile: "",
    })
    const [formError, setFormError] = useState({
        internal_id: "",
        name: "",
        indetification_code: "",
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

        if (!formData.internal_id) {
            newErrors.internal_id = "აუცილებელია ორგანიზაციის ნომრის შეყვანა"
            isValid = false
        }
        if (!formData.name) {
            newErrors.name = "აუცილებელია ორგანიზაციის სახელის შეყვანა"
            isValid = false
        }
        if (!formData.indetification_code) {
            newErrors.indetification_code = "აუცილებელია ორგანიზაციის საიდენტიფიკაციო კოდის შეყვანა"
            isValid = false
        }
        setFormError(newErrors)
        setValidField(isValid)
        return isValid
    }

    const handelSave = async () => {
        if (handelFormValid()) {
            await PostData(Urls['Customers'], formData)
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
                <h2>ორგანიზაციის დამატება</h2>
                <div className="field-containers">
                    <input type="number"
                        name="internal_id"
                        value={formData.internal_id}
                        onChange={handeChanges}
                        placeholder="ორგანიზაციის ნომერი" 
                        required/>
                    {!isValidFiled &&
                        (<span className="newCustomerError">{formError.internal_id}</span>)}

                    <input type="text"
                        name="name"
                        value={formData.name}
                        onChange={handeChanges}
                        placeholder="ორგანიზაციის სახელი" 
                        required/>
                    {!isValidFiled && 
                    (<span className="newCustomerError">{formError.name}</span>)}

                    <input type="text"
                        name="indetification_code"
                        value={formData.indetification_code}
                        onChange={handeChanges}
                        placeholder="საიდენტიფიკაციო კოდი" 
                        required/>
                    {!isValidFiled && 
                    (<span className="newCustomerError">{formError.indetification_code}</span>)}

                    <input type="text"
                        name="address"
                        value={formData.address}
                        onChange={handeChanges}
                        placeholder="მისამართი" />
                    <input type="text"
                        name="clinic_name"
                        value={formData.clinic_name}
                        onChange={handeChanges}
                        placeholder="კლინიკის დასახელება" />
                    <input type="text"
                        name="contact_person"
                        value={formData.contact_person}
                        onChange={handeChanges}
                        placeholder="საკონტაქტო პირი" />
                    <input type="text"
                        name="contact_person_mobile"
                        value={formData.contact_person_mobile}
                        onChange={handeChanges}
                        placeholder="საკონტაქტო მობილური" />
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