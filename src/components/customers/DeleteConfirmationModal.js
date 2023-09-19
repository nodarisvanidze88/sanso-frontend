import React from "react";
import Modal from "react-modal"
import './confirmationmodal.css'

Modal.setAppElement('#root')

const customStyles = {
    content: {
        width: "400px",
        height: "200px",
        margin: "auto",
    },
};
export default function DeleteConfirmationModal({ isOpen, onRequestClose, onDelete }) {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Delete Confirmation Modal"
            style={customStyles}
        >
            <div className="modal-container">
                <h2>Confirm Deletion</h2>
                <p>Are you sure you want to delete this item?</p>
                <div className="modal-butons">
                    <div className="modal-yes-button">
                        <button onClick={onDelete} className="btn btn-danger">Yes</button>
                    </div>
                    <div className="modal-no-button">
                        <button onClick={onRequestClose} className="btn btn-primary">No</button>
                    </div>
                </div>
            </div>
        </Modal>
    )
}