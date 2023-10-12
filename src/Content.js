import React from 'react'
import { useState } from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
//can't use useState hooks inside the class components
//can't use useState inside condition like if clause
const Content = () => {
    const [items, setItems] = useState(
        [
            {
                id: 1,
                checked: true,
                item: "Practice Coding"

            },
            {
                id: 2,
                checked: false,
                item: "Play Cricket"

            },
            {
                id: 3,
                checked: true,
                item: "Read book"

            }
        ]);
    const handleCheck = (id) => {
        const listItems = items.map((item)=>item.id===id ? {...item, checked:!item.checked} : item) 
        setItems(listItems)
        // console.log('id: ${id}')
        localStorage.setItem("todo_list", JSON.stringify(listItems))
    }
    
    const handleDelete = (id) => {
        const listItems = items.filter((item)=>item.id!==id) //? {...item, checked:!item.checked} : item) 
        setItems(listItems)
    }
    // const [name, setName] = useState('Earn');

    //     function handleNameChange(){
    //         const names = ["earn","grow","give"];
    //         const int = Math.floor(Math.random()*3);
    //         setName(names[int]);
    //     }

    // const handleClick = () => {
    //     console.log('Thanks for the Support')
    // }

    // const handleClick = (e) => {
    //     console.log(e.target.innerText)
    // }
    // const handleClick2 = (name) => {
    //     console.log(`Thanks for the Support ${name}`)
    // }

    // const [count, setCount] = useState(99);

    // function increamentFunction(){
    //     setCount(count + 1)
    // }
    // function decreamentFunction(){
    //     setCount(count - 1)
    // }

    return (
        <main>
            {(items.length) ? (
            <ul>
                {items.map((item) => (
                    <li className='item' key={item.id}>
                        <input
                            type="checkbox"
                            onChange={() => handleCheck(item.id)}
                            checked={item.checked}
                        />
                        <label 
                            style={(item.checked) ? {textDecoration:'line-through'} : null}
                            onDoubleClick={() => handleCheck(item.id)}>{item.item}</label>
                        {/* <button>Delete</button> */}
                        <FaRegTrashAlt
                            role="button"
                            onClick={() =>handleDelete(item.id)}
                            tabIndex="0"
                        />
                    </li>
                ))}

            </ul>
            ) : (<p style={{ marginTop: "2rem" , color:"green", fontFamily:"initial"}}>Your list is empty</p>)
            }

            {/* // <p onDoubleClick={() => handleClick2('Vibu')}>Lets {handleNameChange()} Money</p>
    // <button onClick={(e) => handleClick(e)}> Subscribe </button> {/*anonymous fctn is used to call parameter */}

            {/* <p>Lets {name} Money</p>
    <button onClick={handleNameChange} > Subscribe </button> */}
            {/* <button onClick={decreamentFunction}> - </button>
    <span>{count}</span>
    <button onClick={increamentFunction}> + </button> */}

        </main>
    )
}

export default Content 