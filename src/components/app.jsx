import React, { useState, useEffect } from 'react';
import '../index.css';
import Header from './header';
import Main from './main';
import Footer from './footer';
import PopupWithForm from './popup-with-form';
import ImagePopup from './image-popup';
import CurrentUserContext from '../contexts/CurrentUserContext';
import CardsContext from '../contexts/CardsContext';
import api from '../utils/Api';
import EditProfilePopup from './edit-profile-popup';
import EditAvatarPopup from './edit-avatar-popup';

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopup] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopup] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopup] = useState(false);
  const [selectedCard, setSelectedCard] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

  const handleEditAvatarClick = () => {
    setEditAvatarPopup(true);
  };

  const handleEditProfileClick = () => {
    setEditProfilePopup(true);
  };

  const handleAddPlaceClick = () => {
    setAddPlacePopup(true);
  };

  const closeAllPopups = () => {
    setEditAvatarPopup(false);
    setEditProfilePopup(false);
    setAddPlacePopup(false);
    setSelectedCard([]);
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    api.setlike(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    });
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id).then(() => {
      setCards((state) => state.filter((c) => c._id !== card._id));
    });
  }

  function handleUpdateAvatar(data) {
    api.changeAvatar(data)
      .then((data) => {
        setCurrentUser(data);
        closeAllPopups();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handleUpdateUser(data) {
    api.setUserInfo(data)
      .then((data) => {
        setCurrentUser(data);
        closeAllPopups();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    api.getUserInfo()
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((error) => {
        console.log(error);
      });
    api.getInitialCards()
      .then(data => {
        setCards(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <CardsContext.Provider value={cards}>
          <div className="page__container">
            <Header />
            <Main
              onEditProfile={handleEditProfileClick}
              onAddPlace={handleAddPlaceClick}
              onEditAvatar={handleEditAvatarClick}
              onCardClick={setSelectedCard}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
            />
            <Footer />
          </div>
          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
          />
          <PopupWithForm
            name="add"
            title="Новое место"
            button="Создать"
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
          >
            <div className="popup__form-wrapper">
              <input
                name="place"
                minLength={2}
                maxLength={30}
                placeholder="Название"
                type="text"
                id="name"
                className="popup__input popup__input_type_place"
                required=""
              />
              <span
                className="popup__input-error popup__input-error_type_place"
                id="name-error"
              />
            </div>
            <div className="popup__form-wrapper">
              <input
                name="link"
                placeholder="Ссылка на картинку"
                type="url"
                id="link"
                className="popup__input popup__input_type_link"
                required=""
              />
              <span
                className="popup__input-error popup__input-error_type_link"
                id="link-error"
              />
            </div>
          </PopupWithForm>
          <ImagePopup
            card={selectedCard}
            onClose={closeAllPopups}
          />
          <PopupWithForm
            name="delete"
            title="Вы уверены?"
            button="Да"
          />
          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}
          />
        </CardsContext.Provider>
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
