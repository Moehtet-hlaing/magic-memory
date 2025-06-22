import React from "react";

const SingleCard = ({ card, handleChoice, flipped, disabled}) => {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };
  
  return (
    <div className="card relative w-full">
      <div className={flipped ? "flipped" : ""}>
        <img src={card.src} alt="" className="front w-full block border-2 border-white rounded-xl " />
        <img
          src="/img/cover.png"
          alt=""
          className="back w-full block border-2 border-white rounded-xl"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default SingleCard;
