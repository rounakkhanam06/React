import './App.css';
import ProductTab from "./ProductTab.jsx";
import Greetings from "./Greetings.jsx";
import './Product.css';

function App() {
  const Handleclick = ()=>{
    alert("button is clicked!");
  }
  return (
    <div>
      <ProductTab />
      <Greetings name="Pihu" age={21} marks={80} onClick={Handleclick}/>
    </div>
  );
}

export default App;






