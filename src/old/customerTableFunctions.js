import { useEffect, useState } from 'react';

const usersUrl = "http://192.168.92.121:8000/customers/"


function CustomersListFunctions() {
    const [rows, setRows] = useState([])
    const [showConfirmation, setShowConfirmation] = useState(false)
    const [itemToDelete, setItemToDelete] = useState(null)

    useEffect(() => {
        fetch(usersUrl)
            .then(res => res.json())
            .then(data => {
                setRows(data)

            })
    }, [])

    const handelDeleteClick = (id) => {
        setItemToDelete(id)
        setShowConfirmation(true)
    }

    const handelDelete = (idToDelete) => {
        if (idToDelete) {
            fetch(`${usersUrl}${idToDelete}`, {
                method: 'DELETE'
            }).then(res => {
                if (res.ok) {
                    setRows(rows.filter(row => row.id !== idToDelete))
                } else {
                    console.error("Error deleting item:", res.status, res.statusText);
                }
            }).catch(error => {
                console.error("Network error:", error);
            });

        }
        setShowConfirmation(false)
        setItemToDelete(null)
    }
    const cancelDelete = () => {
        setShowConfirmation(false)
        setItemToDelete(null)
    }
    console.log(showConfirmation)
    return {
        rows,
        showConfirmation,
        itemToDelete,
        handelDeleteClick,
        handelDelete,
        cancelDelete,
    }
}

export default CustomersListFunctions;