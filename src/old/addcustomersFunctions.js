import { useState } from "react";
// import './addcustomers.css'
const usersUrl = "http://192.168.92.121:8000/customers/"

function AddCustomersFunctions() {
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
        {
            formData,
            warrningMessage,
            handleFormChanges,
            handleSubmit,
        }
    )
}

export default AddCustomersFunctions