import React, { useState, useEffect, useMemo } from "react";
import { useTable, useSortBy, useGlobalFilter } from "react-table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash, faPenToSquare, faArrowUpWideShort, faArrowDownWideShort } from "@fortawesome/free-solid-svg-icons"
import { CustomerListColumns } from '../../FunctionsAndComponents/TableComponents/customerListColumns'
import { Urls } from '../../FunctionsAndComponents/URLS/urls'
import { GetData } from '../../FunctionsAndComponents/Crud/GetData'
import  DeleteConfirmationModal  from '../../FunctionsAndComponents/Modals/CustomerModals/DeleteConfirmationModal'
import EditCustomerModalNew from '../../FunctionsAndComponents/Modals/CustomerModals/EditCustomerModal'
import {CustomerTableHead} from "./CustomersListTableHead";
import './customerTable.css'

export default function CreateCustomersTable() {
    const [customerList, setCustomerList] = useState([])
    const [isModalEditOpen, setIsModalEditOpen] = useState(false)
    const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false)
    const [itemToEditOrDelete, setItemToEditOrDelete] = useState([])

    
        const fullList = () => {
            GetData(Urls['Get_All_Customers'], setCustomerList)
        }
        useEffect(()=>{
            fullList()
        },[])
    const columns = useMemo(() => CustomerListColumns, [])
    const data = useMemo(() => customerList, [customerList])

    const {
        getTableProps,
        getTableBodyProps,
        rows,
        state,
        prepareRow,
        headerGroups,
        setGlobalFilter,
    } = useTable({ columns, data }, useGlobalFilter, useSortBy)
    const { globalFilter } = state

    return (
        <div className="table-container">
            <CustomerTableHead 
            filter={globalFilter} 
            setFilter={setGlobalFilter} 
            refresh={fullList}/>
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                    {column.render("Header")}
                                    <span>
                                        {column.isSorted ?
                                            (column.isSortedDesc ? <FontAwesomeIcon icon={faArrowDownWideShort} />
                                                : <FontAwesomeIcon icon={faArrowUpWideShort} />) : ""}
                                    </span>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row) => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell) => (
                                    <td {...cell.getCellProps()}>
                                        {cell.render('Cell')}
                                    </td>
                                ))}
                                <td>
                                    <div className="buttons-column">
                                        <div className="button-edit">
                                            <button type="button" className="btn btn-primary btn-sm" onClick={() => {
                                                setItemToEditOrDelete(row.original)
                                                setIsModalEditOpen(true)
                                            }}>
                                                <FontAwesomeIcon icon={faPenToSquare} size="sm" />
                                            </button>
                                        </div>
                                        <div className="button-delete">
                                            <button type="button" className="btn btn-danger btn-sm"
                                                onClick={() => {
                                                    setItemToEditOrDelete(row.original.id)
                                                    setIsModalDeleteOpen(true)
                                                }}>
                                                <FontAwesomeIcon icon={faTrash} size="sm" />
                                            </button>
                                        </div>
                                    </div>
                                </td>
                            </tr>)
                    })}
                </tbody>
            </table>
            <EditCustomerModalNew
                isOpen={isModalEditOpen}
                edit={itemToEditOrDelete}
                refresh={fullList}
                onRequestClose={() => setIsModalEditOpen(false)} />
            <DeleteConfirmationModal
                isOpen={isModalDeleteOpen}
                delateItem={itemToEditOrDelete}
                refresh={fullList} 
                onRequestClose={() => setIsModalDeleteOpen(false)} />
        </div>
    )
}