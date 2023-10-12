// import logo from './logo.svg';
import './App.css';

function App() {
  function handleNameChange(){
    const names = ["Earth","Grow","Give"];
    const int =Math.floor(Math.random()*3);
    return names[int]
  }
  return (
    <div>
      Subscribeeee
      <p>let's {handleNameChange()} money</p>
    </div>
  );
}

export default App;
