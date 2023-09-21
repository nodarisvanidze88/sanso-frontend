import { CustomerListColumns } from './customerListColumns'
import { useTable, useSortBy, useGlobalFilter } from 'react-table'
import { useState, useEffect, useMemo } from "react"
import { CustomerDataUrls } from "./customerDataUrls"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash, faPenToSquare, faArrowUpWideShort, faArrowDownWideShort } from "@fortawesome/free-solid-svg-icons"
import { GlobalFilter } from "./TableHeaderGlobalFilter"
import DeleteConfirmationModal from './DeleteConfirmationModal'
import EditCustomerModal from './EditCustomerModal'

import "./customerTable.css"
export default function CustomerTable() {
    const [CustomerList, setCustomerList] = useState([])
    const [isOpenModal, setIsOpenModal] = useState(false)
    const [isEditModalOpen, setEditModalOpen] = useState(false)
    const [customerToEdit, setCustomerToEdit] = useState(null);
    const [itemToDelete, setItemToDelete] = useState(null)
    console.log(customerToEdit)

    useEffect(() => {
        fetch(CustomerDataUrls['Get_All_Customers'])
            .then(res => res.json())
            .then(data => {
                setCustomerList(data)
            })
    }, [])

    const columns = useMemo(() => CustomerListColumns, [])
    const data = useMemo(() => CustomerList, [CustomerList])

    const { getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        state,
        setGlobalFilter,
        prepareRow } = useTable({ columns, data }, useGlobalFilter, useSortBy)
    const { globalFilter } = state

    const handelDelete = async () => {
        try {
            await fetch(`${CustomerDataUrls['Get_All_Customers']}${itemToDelete}`, {
                method: 'DELETE'
            })
            const response = await fetch(CustomerDataUrls['Get_All_Customers'])
            const newData = await response.json()
            setCustomerList(newData)
            setIsOpenModal(false)
        }
        catch (error) {
            console.error("Error Deleting item", error)
        }
    }
    const handleUpdaetAfteradd = async () => {
        const getAfteradd = await fetch(CustomerDataUrls['Get_All_Customers'])
        const dataAfterAdd = await getAfteradd.json()
        setCustomerList(dataAfterAdd)
    }
    const openEditModal = (customer) => {
        setCustomerToEdit(customer)
        setEditModalOpen(true)
    }
    const handleUpdate = (updatedData) => {

    }

    return (
        <div className="table-container">
            <GlobalFilter
                filter={globalFilter}
                setFilter={setGlobalFilter}
                getNewData={handleUpdaetAfteradd} />
            <table {...getTableProps()} className="table table-striped table-dark">
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                    {column.render('Header')}
                                    <span>
                                        {column.isSorted ? (column.isSortedDesc ? <FontAwesomeIcon icon={faArrowDownWideShort} /> : <FontAwesomeIcon icon={faArrowUpWideShort} />) : ""}
                                    </span>
                                </th>))}
                            <th>ფუნქცია</th>
                        </tr>))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row) => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell) => (
                                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                ))
                                }
                                <td>
                                    <div className="buttons-column">
                                        <div className="button-edit">
                                            <button type="button" className="btn btn-primary btn-sm" onClick={()=>{
                                                setEditModalOpen(true)
                                                setCustomerToEdit(row.original)
                                            }}>
                                                <FontAwesomeIcon icon={faPenToSquare} size="sm" />
                                            </button>
                                        </div>
                                        <div className="button-delete">
                                            <button type="button" className="btn btn-danger btn-sm"
                                                onClick={() => {
                                                    setItemToDelete(row.original.id)
                                                    setIsOpenModal(true)
                                                }}>
                                                <FontAwesomeIcon icon={faTrash} size="sm" />
                                            </button>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        )
                    })
                    }
                </tbody>
            </table>
            <EditCustomerModal
                isOpen={isEditModalOpen}
                onRequestClose={() => setEditModalOpen(false)}
                onUpdate={handleUpdate}
                customerData={customerToEdit} />
            <DeleteConfirmationModal
                isOpen={isOpenModal}
                onRequestClose={() => setIsOpenModal(false)}
                onDelete={handelDelete} />
        </div>

    )
}