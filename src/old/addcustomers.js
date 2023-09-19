import React, { useState } from "react";
// import './addcustomers.css'
const usersUrl = "http://192.168.92.121:8000/customers/"

function AddCustomers() {
    const [formData, setFormData] = useState({
        internal_id: "",
        name: "",
        indetification_code: "",
        address: "",
        clinic_name: "",
        contact_person: "",
        contact_person_mobile: "",
    })
    const [warrningMessage, setWarrningMessage] = useState('')
    const handleFormChanges = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!formData.internal_id || !formData.name || !formData.indetification_code) {
            setWarrningMessage("უნდა შეივსოს ID მომხმარებელი და საიდენტიფიკაციო")
            return;
        }

        fetch(usersUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then(res => res.json())
            .then(data => {
                window.location.reload()
                console.log('Success', data)
            })
            .catch(error => {
                console.log('error', error)
            })
    }
    return (
        <div className="Add-new-customers">
            {warrningMessage && (
                <div className="alert alert-warning">{warrningMessage}</div>)}
            <form onSubmit={handleSubmit}>
                <div className="Input-conteiner">
                    <div className="input-conteiner-left">
                        <div className="mb-3 input-items">
                            <input
                                type="text"
                                name="internal_id"
                                id="internal_id"
                                onChange={handleFormChanges}
                                value={formData.internal_id}
                                placeholder="Internal ID"
                                className="form-control"
                            />
                        </div>
                        <div className="mb-3 input-items">
                            <input
                                type="text"
                                name="name"
                                id="name"
                                onChange={handleFormChanges}
                                value={formData.name}
                                placeholder="ორგანიზაცია"
                                className="form-control"
                            />
                        </div>
                        <div className="mb-3 input-items">
                            <input
                                type="text"
                                name="indetification_code"
                                id="indetification_code"
                                onChange={handleFormChanges}
                                value={formData.indetification_code}
                                placeholder="საიდენტიფიკაციო"
                                className="form-control"
                            />
                        </div>
                        <div className="mb-3 input-items">
                            <input
                                type="text"
                                name="address"
                                id="address"
                                onChange={handleFormChanges}
                                value={formData.address}
                                placeholder="მისამართი"
                                className="form-control"
                            />
                        </div>
                    </div>
                    <div className="input-conteiner-right">
                        <div className="mb-3 input-items">
                            <input
                                type="text"
                                name="clinic_name"
                                id="clinic_name"
                                onChange={handleFormChanges}
                                value={formData.clinic_name}
                                placeholder="კლინიკა"
                                className="form-control"
                            />
                        </div>
                        <div className="mb-3 input-items">
                            <input
                                type="text"
                                name="contact_person"
                                id="contact_person"
                                onChange={handleFormChanges}
                                value={formData.contact_person}
                                placeholder="საკონტაქტო პირი"
                                className="form-control"
                            />
                        </div>
                        <div className="mb-3 input-items">
                            <input
                                type="text"
                                name="contact_person_mobile"
                                id="contact_person_mobile"
                                onChange={handleFormChanges}
                                value={formData.contact_person_mobile}
                                placeholder="საკონტაქტო ნომერი"
                                className="form-control"
                            />
                        </div>
                        <button type="submit" className="btn btn-primary"> შენახვა</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddCustomers