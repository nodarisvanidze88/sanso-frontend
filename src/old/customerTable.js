import CustomersListFunctions from './customerTableFunctions'
import './customerlist.css'


function CustomersList() {
    const {
        rows,
        showConfirmation,
        itemToDelete,
        handelDeleteClick,
        handelDelete,
        cancelDelete,
    } = CustomersListFunctions()
    return (
        <div className='customer-table'>
            <table className="table table-dark table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>ორგანიზაცია</th>
                        <th>საიდენტიფიკაციო</th>
                        <th>მისამართი</th>
                        <th>კლინიკა/სალონი</th>
                        <th>საკონტაქტო</th>
                        <th>მობ</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((c, i) => (
                        <tr key={i}>
                            <td>{c.internal_id}</td>
                            <td>{c.name}</td>
                            <td>{c.indetification_code}</td>
                            <td>{c.address}</td>
                            <td>{c.clinic_name}</td>
                            <td>{c.contact_person}</td>
                            <td>{c.contact_person_mobile}</td>
                            <td><button onClick={() => handelDeleteClick(c.id)} className='btn btn-outline-danger btn-sm'>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    width="14"
                                    height="14" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                                </svg></button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            
            {showConfirmation && (
                <div className='modal' style={{ display: showConfirmation ? 'block' : 'none' }}>
                <div className='modal-content'>
                    <p>Are you sure you want to delete this item?</p>
                    <button onClick={() => handelDelete(itemToDelete)}>Yes</button>
                    <button onClick={cancelDelete}>No</button>
                </div>
            </div>

            )}
        </div>
    )
}

export default CustomersList;
