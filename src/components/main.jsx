function Main({onEditProfile, onAddPlace, onEditAvatar}) {
  return (
    <main className="main">
      <section className="profile">
        <div className="profile__image-overlay">
          <img src="#" alt="Аватар пользователя" className="profile__image" onClick={onEditAvatar}/>
        </div>
        <div className="profile__info">
          <h1 className="profile__title" aria-label="Имя пользователя" />
          <button
            className="profile__edit-button"
            type="button"
            aria-label="Редактировать"
            onClick={onEditProfile}
          />
          <p className="profile__caption" />
        </div>
        <button
          className="profile__add-button"
          type="button"
          aria-label="Добавить"
          onClick={onAddPlace}
        />
      </section>
      <section className="elements" aria-label="Карточки мест России">
        <ul className="elements__list" />
      </section>
    </main>
  );
}

export default Main
