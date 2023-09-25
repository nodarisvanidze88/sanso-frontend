import React, { useState } from "react";
import AddNewAlmaSystemModal from "../../FunctionsAndComponents/Modals/AlmaSystemModelsModals/AddAlmaSystemModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserPlus } from "@fortawesome/free-solid-svg-icons"
import './AlmaSystemModelsTableHeader.css'

export const AlmaSystemModelsTableHead = ({ filter, setFilter, refresh }) => {
    const [isAddModalOpen, setAddModalOpen] = useState(false)
    const handeAddClick = () => {
        setAddModalOpen(true)
    }

    return (
        <div className="Table-Header">
            <div className="Table-Name">მოწყობილობების სია
                <button onClick={handeAddClick} className="btn btn-primary btn-sm add-button">
                    <FontAwesomeIcon icon={faUserPlus} />{` Add`}</button>
                <AddNewAlmaSystemModal isOpen={isAddModalOpen}
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