import { useState } from 'react';
import PopupWithForm from './PopupWithForm.js';

function AddPlacePopup({ isOpen, onClose, onSubmitPopup }) {

  const [placeName, setPlaceName] = useState('');
  const [placeURL, setPlaceURL] = useState('');

  function onAddPlaceName(evt) {
    setPlaceName(evt.target.value);
  }

  function onAddPlaceURL(evt) {
    setPlaceURL(evt.target.value);
  }

  function handleSubmitForm(evt) {
    evt.preventDefault();
    onSubmitPopup(placeName, placeURL);
    setPlaceName('');
    setPlaceURL('');
  }

  return (
    <PopupWithForm
      name="photoAdd"
      title="Новое место"
      submitText="Создать"
      isOpen={isOpen}
      onClose={onClose}
      onSubmitPopup={handleSubmitForm}
    >
      <fieldset className="popup__fieldset"
                id="photoAdd-popup-fieldset">
        <label>
          <input
            value={placeName}
            onChange={onAddPlaceName}
            className="popup__input popup__input_type_photoAdd-place"
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
          <input
            value={placeURL}
            onChange={onAddPlaceURL}
            className="popup__input popup__input_type_photoAdd-link"
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
  );
}

export default AddPlacePopup;
