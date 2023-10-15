function ImagePopup() {
  return (
    <div className="popup image-popup">
      <figure className="image-popup__figure">
        <button
          className="popup__close-button image-popup__close-button"
          type="button"
          aria-label="Закрыть"
        />
        <img
          src="#"
          alt="Изображение места на карточке"
          className="image-popup__image"
        />
        <figcaption className="image-popup__caption" />
      </figure>
    </div>
  );
}

export default ImagePopup;
