import React from 'react'
// import { FaRegTrashAlt } from 'react-icons/fa';
import LineItems from './LineItems';


const itemsList = ({items, handleCheck, handleDelete}) => {
    return (
        // <div>itemsList</div>
        <ul>
            {items.map((item) => (
                <LineItems 
                item={item}
                key = {item.id}
                handleCheck={handleCheck}
                handleDelete={handleDelete}
                />
                // <li className='item' key={item.id}>
                //     <input
                //         type="checkbox"
                //         onChange={() => handleCheck(item.id)}
                //         checked={item.checked}
                //     />
                //     <label
                //         style={(item.checked) ? { textDecoration: 'line-through' } : null}
                //         onDoubleClick={() => handleCheck(item.id)}>{item.item}</label>
                //     {/* <button>Delete</button> */}
                //     <FaRegTrashAlt
                //         role="button"
                //         onClick={() => handleDelete(item.id)}
                //         tabIndex="0"
                //     />
                // </li>
            ))}

        </ul>
    )
}

export default itemsList