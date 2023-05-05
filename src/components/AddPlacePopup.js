import PopupWithForm from './PopupWithForm.js';

function AddPlacePopup({ isOpen, onClose }) {
  return (
    <PopupWithForm
      name="photoAdd"
      title="Новое место"
      submitText="Создать"
      isOpen={isOpen}
      onClose={onClose}
    >
      <fieldset className="popup__fieldset"
                id="photoAdd-popup-fieldset">
        <label>
          <input className="popup__input popup__input_type_photoAdd-place"
                 type="text"
                 name="name"
                 id="photoAdd-input-text"
                 placeholder="Название"
                 required
                 maxLength="40"
                 minLength="2"/>
          <span className="popup__input-error photoAdd-input-text-error"/>
        </label>
        <label>
          <input className="popup__input popup__input_type_photoAdd-link"
                 type="url"
                 name="link"
                 id="photoAdd-input-url"
                 placeholder="Ссылка на картинку"
                 required
                 minLength="2"/>
          <span className="popup__input-error photoAdd-input-url-error"/>
        </label>
      </fieldset>
    </PopupWithForm>
  )
}

export default AddPlacePopup;
