import React, { useState, useEffect, useMemo } from "react";
import { useTable, useSortBy, useGlobalFilter } from "react-table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash, faPenToSquare, faArrowUpWideShort, faArrowDownWideShort } from "@fortawesome/free-solid-svg-icons"
import { TechnicalPersonColumns } from '../../FunctionsAndComponents/TableComponents/TechnicalPersonColumns'
import { Urls } from '../../FunctionsAndComponents/URLS/urls'
import { GetData } from '../../FunctionsAndComponents/Crud/GetData'
import DeleteTechnicalPersonModal from "../../FunctionsAndComponents/Modals/TechnicalPersonModals/DeleteConfirmationModal";
import EditTechnicalPersonModal from "../../FunctionsAndComponents/Modals/TechnicalPersonModals/EditTechnicalPersonModal";
import {TechnicalPersonTableHead} from "./TechnicalPersonTableHead"
import './TechnicalPersonTable.css'

export default function CreateTechnicalPersonTable() {
    const [technicalPerson, settechnicalPerson] = useState([])
    const [isModalEditOpen, setIsModalEditOpen] = useState(false)
    const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false)
    const [itemToEditOrDelete, setItemToEditOrDelete] = useState([])

    
        const fullList = () => {
            GetData(Urls['TechnicalPerson'], settechnicalPerson)
        }
        useEffect(()=>{
            fullList()
        },[])
    const columns = useMemo(() => TechnicalPersonColumns, [])
    const data = useMemo(() => technicalPerson, [technicalPerson])

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
        <div className="hp-models-table-container">
            <TechnicalPersonTableHead
            filter={globalFilter} 
            setFilter={setGlobalFilter} 
            refresh={fullList}/>
            <table {...getTableProps()} className="table table-striped table-dark table-hover">
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
                            <th className="alma-system-models-action-header">მოქმედება</th>
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
                                <td className="alma-system-models-action-row">
                                    <div className="alma-system-models-buttons-column">
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
            <EditTechnicalPersonModal
                isOpen={isModalEditOpen}
                edit={itemToEditOrDelete}
                refresh={fullList}
                onRequestClose={() => setIsModalEditOpen(false)} />
            <DeleteTechnicalPersonModal
                isOpen={isModalDeleteOpen}
                delateItem={itemToEditOrDelete}
                refresh={fullList} 
                onRequestClose={() => setIsModalDeleteOpen(false)} />
        </div>
    )
}