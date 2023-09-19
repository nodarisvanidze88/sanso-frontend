// import AddCustomersFunctions from './addcustomersFunctions'
// import './addcustomers.css'
import { useState } from 'react'

function AddCustomers() {
    const [findData, setFindData] = useState('')
    const {
            formData,
            warrningMessage,
            handleFormChanges,
            handleSubmit,
    } = AddCustomersFunctions()

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
                        <div className="mb-3 input-items">
                            <input
                                type="text"
                                name="findData"
                                id="findData"
                                onChange={(e) => setFindData(e.target.value)}
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