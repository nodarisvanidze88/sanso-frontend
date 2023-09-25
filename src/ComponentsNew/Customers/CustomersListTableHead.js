import React, { useState } from "react";
import AddNewCustomerModal from "../../FunctionsAndComponents/Modals/CustomerModals/AddCustomerModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserPlus } from "@fortawesome/free-solid-svg-icons"
import './tableHeader.css'

export const CustomerTableHead = ({ filter, setFilter, refresh }) => {
    const [isAddModalOpen, setAddModalOpen] = useState(false)
    const handeAddClick = () => {
        setAddModalOpen(true)
    }
    // const handeSaveNewCustomer = async (formData) => {
    //     try {
    //         const response = await fetch(CustomerDataUrls['Get_All_Customers'], {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify(formData)
    //         })
    //         if (!response.ok) {
    //             throw new Error("Network response was not OK")
    //         }
    //         const responseData = await response.json()
    //         console.log("Response from server", responseData)
    //         getNewData()
    //     } catch (error) {
    //         console.error("Error: ", error)
    //     }
    // }

    return (
        <div className="Table-Header">
            <div className="Table-Name">კლიენტების სია
                <button onClick={handeAddClick} className="btn btn-primary btn-sm add-button">
                    <FontAwesomeIcon icon={faUserPlus} />{` Add`}</button>
                <AddNewCustomerModal isOpen={isAddModalOpen}
                    onRequestClose={() => setAddModalOpen(false)}
                    refresh={refresh} />
            </div>
            <div className="Globa-Search">
                <h1 className="Search-label">Search: </h1>
                <input className="Search-Input" value={filter || ""}
                    onChange={e => setFilter(e.target.value)} />
            </div>
        </div>
    )
}