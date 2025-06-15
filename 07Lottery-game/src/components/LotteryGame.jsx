import { useState } from "react";
import Confetti from "react-confetti";
import { genTicket, sum } from "./helper";
import Ticket from "./Ticket";

export default function LotteryGame({ n, winningSum }) {
  // Store the ticket in state
  const [ticket, setTicket] = useState(null);
  // Store winner's name
  const [playerName, setPlayerName] = useState('');
  
  // Check if sum == Winning Sum
  const isWinning = ticket && sum(ticket) === winningSum;

  // Generate a new ticket
  const butTicket = () => {
    setTicket(genTicket(n)); 
  };

  // Take name at start
  if (!playerName) {
    const enteredName = prompt("Enter your name to start the game!");
    if (enteredName && enteredName.trim()) {
      setPlayerName(enteredName.trim());  
    } else {
      setPlayerName("Player"); // fallback if empty
    }
  }

  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      {/* Winning pe confetti show karein */}
      {isWinning && <Confetti />}
      {/* Ticket ko show karein ya "Start the game!"*/}
      {ticket ? <Ticket ticket={ticket} /> : <h3>Start the game, {playerName}!</h3>}

      {/* Button for new ticket */}
      <button onClick={butTicket}>
        {ticket ? "Buy another ticket" : "Buy Ticket"}
      </button>

      {/* Winning or losing message*/}
      {isWinning ? (
        <h3>🎉 Congratulations, {playerName}! You won the Lottery! 🏆</h3>
      ) : (
        ticket && <h3>Better luck next time! 🍀</h3>
      )}

    </div>
  );
}
