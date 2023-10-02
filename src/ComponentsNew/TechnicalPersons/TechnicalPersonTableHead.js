import React, { useState } from "react";
import AddTechnicalPersonModal from "../../FunctionsAndComponents/Modals/TechnicalPersonModals/AddTechnicalPersonModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserPlus } from "@fortawesome/free-solid-svg-icons"
import './TechnicalPersonTableHeader.css'

export const TechnicalPersonTableHead = ({ filter, setFilter, refresh }) => {
    const [isAddModalOpen, setAddModalOpen] = useState(false)
    const handeAddClick = () => {
        setAddModalOpen(true)
    }

    return (
        <div className="Table-Header">
            <div className="Table-Name">ტექნიკოსების სია
                <button onClick={handeAddClick} className="btn btn-primary btn-sm add-button">
                    <FontAwesomeIcon icon={faUserPlus} />{` Add`}</button>
                <AddTechnicalPersonModal isOpen={isAddModalOpen}
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