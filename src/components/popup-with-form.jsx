import React from "react";

function PopupWithForm({ name, title, button, children, isOpen, onClose }) {
  return (
    <div className={`popup ${isOpen ? 'popup_opened' : ''}`}>
      <div className={`popup__container ${name}-popup__container`}>
        <button
          className="popup__close-button"
          type="button"
          aria-label="Закрыть"
          onClick={onClose}
        />
        <h2 className="popup__title">{title}</h2>
        <form
          name={name}
          className={`popup__form ${name}-popup__form`}
          noValidate
        >
          {children}
          <button className={`popup__button ${name}-popup__button`} type="submit">
            {button || 'Сохранить'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
