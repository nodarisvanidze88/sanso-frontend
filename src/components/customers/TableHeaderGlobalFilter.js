import React from "react";
import "./tableHeader.css"
export const GlobalFilter = ({filter, setFilter}) => {
    return (
        <div className="Table-Header">
            <div className="Table-Name">კლიენტების სია</div>
        <div className="Globa-Search">
            <h1 className="Search-label">Search: </h1>
            <input className="Search-Input" value={filter || ""}
            onChange={e => setFilter(e.target.value)} />
        </div>
        </div>
    )

}