import React from "react";

const Table=({data,onSort,sort,sortField,onRowSelect})=>{

    return(
        <div>
            <table className="table">
                <thead>

                <tr>
                    <th onClick={onSort.bind(null,'id')}>userId
                        {sortField==='id'?<small>{sort}</small>:null}
                    </th>
                    <th onClick={onSort.bind(null,'title')}>title
                        {sortField==='title'?<small>{sort}</small>:null}
                    </th>
                    <th onClick={onSort.bind(null,'body')}>body
                        {sortField==='body'?<small>{sort}</small>:null}
                    </th>
                </tr>
                </thead>
                <tbody>
                {data&&data.map(item=>(
                    <tr key={item.id} onClick={onRowSelect.bind(null,item)}>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.body}</td>
                    </tr>
                ))}

                </tbody>
            </table>
        </div>
    )
}

export default  Table;