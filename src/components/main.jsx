const handleEditAvatarClick = () => {
  const avatarPopup = document.querySelector('.avatar-popup');
  avatarPopup.classList.add('popup_opened');
};

const handleEditProfileClick = () => {
  const editProfilePopup = document.querySelector('.edit-popup');
  editProfilePopup.classList.add('popup_opened');
};

const handleAddPlaceClick = () => {
  const addPlacePopup = document.querySelector('.add-popup');
  addPlacePopup.classList.add('popup_opened');
};

function Main() {
  return (
    <main className="main">
      <section className="profile">
        <div className="profile__image-overlay">
          <img src="#" alt="Аватар пользователя" className="profile__image" onClick={handleEditAvatarClick}/>
        </div>
        <div className="profile__info">
          <h1 className="profile__title" aria-label="Имя пользователя" />
          <button
            className="profile__edit-button"
            type="button"
            aria-label="Редактировать"
            onClick={handleEditProfileClick}
          />
          <p className="profile__caption" />
        </div>
        <button
          className="profile__add-button"
          type="button"
          aria-label="Добавить"
          onClick={handleAddPlaceClick}
        />
      </section>
      <section className="elements" aria-label="Карточки мест России">
        <ul className="elements__list" />
      </section>
    </main>
  );
}

export default Main
