import React, { useState, useEffect } from "react";
import Modal from "react-modal"
import './confirmationmodal.css'


Modal.setAppElement('#root')

const customStyles = {
    content: {
        width: "800px",
        height: "600px",
        margin: "auto",
    },
};
export default function EditCustomerModal({ isOpen, onRequestClose, onUpdate, customerData }) {
    const [isValidFiled, setValidField] = useState(true)
    const [formError, setFormError] = useState(false)
    const [formData, setFormData] = useState({});
    
    useEffect(() => {
        if (customerData) {
            setFormData(customerData);
        }
    }, [customerData]);
    
    const handleInputChanges = (e) => {
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
            await onUpdate(formData)
            onRequestClose()
        }
    }
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Edit Customer Modal"
            style={customStyles}
        >
            <div className="add-modal-container">
                <h2>ორგანიზაციის რედაქტირება</h2>
                <div className="field-containers">
                    <input type="text"
                        name="internal_id"
                        value={formData.internal_id}
                        onChange={handleInputChanges}
                        placeholder="ორგანიზაციის ნომერი" 
                        required/>
                    {!isValidFiled &&
                        (<span className="newCustomerError">{formError.internal_id}</span>)}

                    <input type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChanges}
                        placeholder="ორგანიზაციის სახელი" 
                        required/>
                    {!isValidFiled && 
                    (<span className="newCustomerError">{formError.name}</span>)}

                    <input type="text"
                        name="indetification_code"
                        value={formData.indetification_code}
                        onChange={handleInputChanges}
                        placeholder="საიდენტიფიკაციო კოდი" 
                        required/>
                    {!isValidFiled && 
                    (<span className="newCustomerError">{formError.indetification_code}</span>)}

                    <input type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChanges}
                        placeholder="მისამართი" />
                    <input type="text"
                        name="clinic_name"
                        value={formData.clinic_name}
                        onChange={handleInputChanges}
                        placeholder="კლინიკის დასახელება" />
                    <input type="text"
                        name="contact_person"
                        value={formData.contact_person}
                        onChange={handleInputChanges}
                        placeholder="საკონტაქტო პირი" />
                    <input type="text"
                        name="contact_person_mobile"
                        value={formData.contact_person_mobile}
                        onChange={handleInputChanges}
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