import React from "react";

function Card({ card, onCardClick }) {

  function handleClick() {
    onCardClick(card);
  }

  return (
    <li className="elements__list-item">
      <img alt="Изображение места на карточке" className="elements__image" src={card.link} onClick={handleClick}/>
      <button className="elements__delete" type="button" />
      <div className="elements__caption">
        <h2 className="elements__title">
          {card.name}
        </h2>
        <div className="elements__like-wrapper">
          <button className="elements__heart" type="button" />
          <p className="elements__like-counter">{card.likes.length}</p>
        </div>
      </div>
    </li>
  );
};

export default Card
