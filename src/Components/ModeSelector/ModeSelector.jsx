import React from "react";

const ModeSelector = ({onSelect,}) => {
    const smallUrl = 'http://jsonplaceholder.typicode.com/posts'
    const bigUrl = 'http://jsonplaceholder.typicode.com/posts'
    return (
        <div>
            <h3 style={{display:'flex',justifyContent:"center",margin:'100px'}} >Выберите размер масива данных</h3>
        <div style={{display:'flex',justifyContent:"center",margin:'100px 400px',width:'220px',height:'120px'}}>
            <button onClick={() => onSelect(smallUrl)} className="btn btn-success">50 элементов</button>
            <button onClick={() => onSelect(bigUrl)} className="btn btn-warning">100 элементов</button>
        </div>
        </div>
    )
}

export default ModeSelector;