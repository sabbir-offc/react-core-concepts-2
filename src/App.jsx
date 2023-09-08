import "./App.css";
import Counter from "./Counter";
import Friends from "./Friends";
import Team from "./Tem";
import Users from "./Users";


function App() {
  function handleClick() {
    alert("button click");
  }
  const handleClick2 = () => {
    alert("button click 2");
  }
  const handleClick3 = (num) => {
    alert(num + 5);
  }
  return (
    <>
      <h3>React Core Concept 2</h3>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>


      <button onClick={handleClick}>Click Me</button> <br />
      <button onClick={handleClick2} style={{margin: '10px'}}>Click Me</button> <br />
      <button onClick={() => {alert('click button 3')}}>Click Me 3</button> <br />
      <button onClick={() => handleClick3(3)} style={{margin:'15px'}}>Click 4</button>
    </>
  );
}

export default App;
