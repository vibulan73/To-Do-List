import React from 'react'
import { FaRegTrashAlt } from 'react-icons/fa';


const LineItems = ({item, handleCheck, handleDelete}) => {
  return (
    // <div>LineItems</div>
    <li className='item'>
                    <input
                        type="checkbox"
                        onChange={() => handleCheck(item.id)}
                        checked={item.checked}
                    />
                    <label
                        style={(item.checked) ? { textDecoration: 'line-through' } : null}
                        onDoubleClick={() => handleCheck(item.id)}>{item.item}</label>
                    {/* <button>Delete</button> */}
                    <FaRegTrashAlt
                        role="button"
                        onClick={() => handleDelete(item.id)}
                        tabIndex="0"
                        // aria-label={'Delete ${item.item}'}
                    />
                </li>
  )
}

export default LineItems