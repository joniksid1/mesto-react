import React from 'react';
import api from '../utils/Api';
import Card from './card';

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {

  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getUserInfo()
      .then(({ name, about, avatar }) => {
        setUserName(name);
        setUserDescription(about);
        setUserAvatar(avatar);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  React.useEffect(() => {
    api.getInitialCards()
      .then(data => {
        setCards(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__image-overlay">
          <img
            src={userAvatar}
            alt="Аватар пользователя"
            className="profile__image"
            onClick={onEditAvatar}
          />
        </div>
        <div className="profile__info">
          <h1 className="profile__title" aria-label="Имя пользователя">
            {userName}
          </h1>
          <button
            className="profile__edit-button"
            type="button"
            aria-label="Редактировать"
            onClick={onEditProfile}
          />
          <p className="profile__caption">
            {userDescription}
          </p>
        </div>
        <button
          className="profile__add-button"
          type="button"
          aria-label="Добавить"
          onClick={onAddPlace}
        />
      </section>
      <section className="elements" aria-label="Карточки мест России">
        <ul className="elements__list">
          {cards.map((card) => (
            <Card card={card} onCardClick={onCardClick} key={card._id}/>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main
