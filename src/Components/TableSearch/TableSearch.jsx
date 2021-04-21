import React, {useState} from "react";

const TableSearch =({onSearch})=>{

    const[value,setState]=useState('')

    const valueChange=(event)=>{
        setState(event.target.value)
    }

    return(
        <div>
            <div className="input-group mb-3 mt-3">
                <button className="btn btn-outline-secondary"
                        onClick={()=>onSearch(value)}
                        type="button" id="button-addon1">Search</button>
                <input type="text" className="form-control"
                       value={value}
                       onChange={valueChange}
                       placeholder="" aria-label="Example text with button addon"
                       aria-describedby="button-addon1"/>
            </div>
        </div>
    )

}

export default TableSearch;