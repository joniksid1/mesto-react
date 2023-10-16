function ImagePopup({ card, onClose }) {
  return (
    <div className={`popup image-popup ${card.link ? 'popup_opened' : ''}`}>
      <figure className="image-popup__figure">
        <button
          className="popup__close-button image-popup__close-button"
          type="button"
          aria-label="Закрыть"
          onClick={onClose}
        />
        <img
          src={ card.link }
          alt={ card.name }
          className="image-popup__image"
        />
        <figcaption className="image-popup__caption">
          { card.name }
        </figcaption>
      </figure>
    </div>
  );
}

export default ImagePopup;
