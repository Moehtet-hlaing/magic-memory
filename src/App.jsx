import React, { useEffect, useState } from 'react'
import SingleCard from './components/SingleCard';

  const cardImages = [
    {"src" : "public/img/helmet-1.png", matched : false},
    {"src" : "public/img/potion-1.png", matched : false},
    {"src" : "public/img/ring-1.png", matched : false},
    {"src" : "public/img/scroll-1.png", matched : false},
    {"src" : "public/img/shield-1.png", matched : false},
    {"src" : "public/img/sword-1.png", matched : false},
  ];

const App = () => {

  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
    setTurns(0);
  }

  //handle a choice
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  }

  //compare 2 selected cards
  useEffect(() => {
    if(choiceOne && choiceTwo) {
      setDisabled(true);
      if(choiceOne.src === choiceTwo.src) {
        setCards(prevCards => {
          return prevCards.map(card => {
            if(card.src === choiceOne.src) {
              return {...card, matched : true}
            } else {
              return card;
            }
          })
        })
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  //reset choices & increase turn
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns(prevTurns => prevTurns + 1);
    setDisabled(false);
  }

  useEffect(() => {
    shuffleCards();
  }, []);

  return (
    <div className='App mx-auto mt-10 font-raleway text-3xl  text-white flex flex-col px-6 justify-center'>
      <h1 className='mb-4 text-center'>Magic Match</h1>
      <div className="flex justify-center items-center">
        <button 
        onClick={shuffleCards}
        className=' bg-transparent border-2 border-white px-2 py-1 rounded-lg text-white font-bold cursor-pointer text-xs hover:scale-105'>New Game</button>
      </div>
        <div className="card-grid grid grid-cols-4 gap-4 mt-6">
          {cards.map((card) => (
            <SingleCard 
              key={card.id} 
              card={card} 
              handleChoice={handleChoice}
              flipped={card === choiceOne || card === choiceTwo || card.matched}
              disabled={disabled}
            />
          ))}
        </div>
        <p className='mt-4 text-center text-lg'>Turns: {turns}</p>
    </div>
  )
}

export default App