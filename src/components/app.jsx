import '../index.css';
import Header from './header';
import Main from './main';
import Footer from './footer';
import PopupWithForm from './popup-with-form';
import ImagePopup from './image-popup';

function App() {
  return (
    <>
      <div className="page__container">
        <Header />
        <Main />
        <Footer />
      </div>
      <PopupWithForm
        name='profile'
        title='Редактировать профиль'
        button='Сохранить'
      >
        <div className="popup__form-wrapper">
          <input
            name="name"
            minLength={2}
            maxLength={40}
            type="text"
            id="nameInput"
            className="popup__input popup__input_type_name"
            required=""
          />
          <span
            className="popup__input-error popup__input-error_type_name"
            id="nameInput-error"
          />
        </div>
        <div className="popup__form-wrapper">
          <input
            name="job"
            minLength={2}
            maxLength={200}
            type="text"
            id="about"
            className="popup__input popup__input_type_job"
            required=""
          />
          <span
            className="popup__input-error popup__input-error_type_job"
            id="about-error"
          />
        </div>
      </PopupWithForm>
      {/* <div className="popup edit-popup">
        <div className="popup__container edit-popup__container">
          <button
            className="popup__close-button edit-popup__close-button"
            type="button"
            aria-label="Закрыть"
          />
          <h2 className="popup__title edit-popup__title">Редактировать профиль</h2>
          <form
            name="profile"
            className="popup__form edit-popup__form"
            noValidate=""
          >
            <div className="popup__form-wrapper">
              <input
                name="name"
                minLength={2}
                maxLength={40}
                type="text"
                id="nameInput"
                className="popup__input popup__input_type_name"
                required=""
              />
              <span
                className="popup__input-error popup__input-error_type_name"
                id="nameInput-error"
              />
            </div>
            <div className="popup__form-wrapper">
              <input
                name="job"
                minLength={2}
                maxLength={200}
                type="text"
                id="about"
                className="popup__input popup__input_type_job"
                required=""
              />
              <span
                className="popup__input-error popup__input-error_type_job"
                id="about-error"
              />
            </div>
            <button
              className="popup__button edit-popup__button"
              type="submit"
              disabled=""
            >
              Сохранить
            </button>
          </form>
        </div>
      </div> */}
      <PopupWithForm
        name="add"
        title="Новое место"
        button="Создать"
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
      {/* <div className="popup add-popup">
        <div className="popup__container add-popup__container">
          <button
            className="popup__close-button add-popup__close-button"
            type="button"
            aria-label="Закрыть"
          />
          <h2 className="popup__title add-popup__title">Новое место</h2>
          <form name="add" className="popup__form add-popup__form" noValidate="">
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
            <button
              className="popup__button add-popup__button"
              type="submit"
              disabled=""
            >
              Создать
            </button>
          </form>
        </div>
      </div> */}
      <ImagePopup />
      <PopupWithForm
        name="delete"
        title="Вы уверены?"
        button="Да"
      />
      {/* <div className="popup delete-popup">
        <div className="popup__container delete-popup__container">
          <button
            className="popup__close-button delete-popup__close-button"
            type="button"
            aria-label="Закрыть"
          />
          <h2 className="popup__title delete-popup__title">Вы уверены?</h2>
          <form
            name="delete"
            className="popup__form delete-popup__form"
            noValidate=""
          >
            <button className="popup__button delete-popup__button" type="submit">
              Да
            </button>
          </form>
        </div>
      </div> */}
      <PopupWithForm
        name="avatar"
        title="Обновить аватар"
        button="Сохранить"
      >
        <div className="popup__form-wrapper">
          <input
            name="avatar-link"
            placeholder="Ссылка на картинку"
            type="url"
            id="avatar-link"
            className="popup__input popup__input_type_link"
            required=""
          />
          <span
            className="popup__input-error popup__input-error_type_avatar-link"
            id="avatar-link-error"
          />
        </div>
      </PopupWithForm>
      {/* <div className="popup avatar-popup">
        <div className="popup__container avatar-popup__container">
          <button
            className="popup__close-button avatar-popup__close-button"
            type="button"
            aria-label="Закрыть"
          />
          <h2 className="popup__title avatar-popup__title">Обновить аватар</h2>
          <form
            name="avatar"
            className="popup__form avatar-popup__form"
            noValidate=""
          >
            <div className="popup__form-wrapper">
              <input
                name="avatar-link"
                placeholder="Ссылка на картинку"
                type="url"
                id="avatar-link"
                className="popup__input popup__input_type_link"
                required=""
              />
              <span
                className="popup__input-error popup__input-error_type_avatar-link"
                id="avatar-link-error"
              />
            </div>
            <button
              className="popup__button avatar-popup__button"
              type="submit"
              disabled=""
            >
              Сохранить
            </button>
          </form>
        </div>
      </div> */}
      <template className="cards">
        <li className="elements__list-item">
          <img alt="Изображение места на карточке" className="elements__image" />
          <button className="elements__delete" type="button" />
          <div className="elements__caption">
            <h2 className="elements__title" />
            <div className="elements__like-wrapper">
              <button className="elements__heart" type="button" />
              <p className="elements__like-counter">0</p>
            </div>
          </div>
        </li>
      </template>
    </>
  );
}

export default App;
