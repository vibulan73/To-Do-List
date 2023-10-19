// import logo from './logo.svg';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import { useState } from 'react';


function App() {
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
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item)
    setItems(listItems)
    // console.log('id: ${id}')
    localStorage.setItem("todo_list", JSON.stringify(listItems))
  }

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id) //? {...item, checked:!item.checked} : item) 
    setItems(listItems)
    localStorage.setItem("todo_list", JSON.stringify(listItems))

  }

  return (
    <div className='App'>
      <Header title="have to do" />
      <Content
        items={items}
        // setItems = {setItems}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer
        length={items.length} />
    </div>
  );
}

export default App;
