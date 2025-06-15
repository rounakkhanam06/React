
import React from "react";
import LotteryGame from "./components/LotteryGame";
import './app.css'

function App() {
  return (
    <div className="container">
      <h1>Lottery Game</h1>
      {/* n = number of ticket numbers, 
          winningSum = sum to match in order to win */}
      <LotteryGame n={3} winningSum={15} />
    </div>
  );
}

export default App;
