import { useEffect, useState } from "react";
import "./MemoryGame.css";

const cards = [
  { id: 1, value: "🧠" },
  { id: 2, value: "🧠" },
  { id: 3, value: "🎯" },
  { id: 4, value: "🎯" },
  { id: 5, value: "⚡" },
  { id: 6, value: "⚡" },
  { id: 7, value: "🧩" },
  { id: 8, value: "🧩" },
];
// Helper function to shuffle an array
const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};
function MemoryGame() {
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);

  const [gameCards, setGameCards] = useState(() => shuffleArray(cards));                         
  const [showCards, setShowCards] = useState(true);
  const startGame = () => {
    
    setShowCards(!showCards);
  };
  const startNewGame = () => {
     setGameCards(shuffleArray(cards));
    setShowCards(true);
    setFlippedCards([]);
    setMatchedCards([]);
  };



  const handleCardClick = (card) => {
    if (
      flippedCards.length === 2 ||
      flippedCards.includes(card.id) ||
      matchedCards.includes(card.id)
    ) {
      return;
    }

    const newFlippedCards = [...flippedCards, card.id];

    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      const firstCard = cards.find((item) => item.id === newFlippedCards[0]);

      const secondCard = cards.find((item) => item.id === newFlippedCards[1]);

      if (firstCard.value === secondCard.value) {
        setMatchedCards((prev) => [...prev, firstCard.id, secondCard.id]);

        setFlippedCards([]);
      } else {
        setTimeout(() => {
          setFlippedCards([]);
        }, 800);
      }
    }
  };

  return (
    <main className="memory-page">
      <div className="memory-container">
        <header className="memory-header">
          <span className="memory-label">🧠 MEMORY CHALLENGE</span>

          <h1>
            Match the <span>Cards</span>
          </h1>

          <p>
            Find all matching pairs and test how strong your memory really is.
          </p>
        </header>

        <div className="memory-stats">
          <div className="stat">
            <span>Pairs</span>
            <strong>{matchedCards.length / 2} / 4</strong>
          </div>

          <div className="stat">
            <button onClick={() => startGame()}>Start</button>
            <button onClick={() => startNewGame()}>New Game</button>
          </div>

          <div className="stat" >
            <span>Time</span>
            <strong>00:00</strong>
          </div>
        </div>

        <section className="memory-board">
          {gameCards.map((card) => {
            const isFlipped =
              flippedCards.includes(card.id) || matchedCards.includes(card.id);

            return (
              <button
                key={card.id}
                className={`memory-card ${isFlipped|| showCards ? "flipped" : ""}`}
                onClick={showCards ? null : () => handleCardClick(card)}
              >
                {showCards ?<span>{card.value}</span>:<span>{isFlipped ? card.value : "?"}</span>}
                {/*  */}
              </button>
            );
          })}
        </section>
      </div>
    </main>
  );
}

export default MemoryGame;
