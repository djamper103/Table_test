import React from "react";

const DetailRow=({row})=>{

    return(
        <div>
            <br/>
            <b>
            <table className="table">
                    <tr key={row.id}>
                        <td>{row.id}</td>
                        <td>{row.title}</td>
                        <td>{row.body}</td>
                    </tr>

            </table>
            </b>
        </div>
    )
}
export default DetailRow;