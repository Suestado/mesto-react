import { useState, useContext, useEffect } from 'react';
import { CurrentUserContext } from '../context/CurrentUserContext.js';
import PopupWithForm from './PopupWithForm.js';

function EditProfilePopup({ isOpen, onClose, onSubmitPopup, isUploading }) {

  const currentUser = useContext(CurrentUserContext);
  const [valueName, setValueName] = useState('');
  const [valueDescription, setValueDescription] = useState('');

  useEffect(() => {
    setValueName(currentUser.name || '');
    setValueDescription(currentUser.about || '');
  }, [currentUser]);


  function onNameChange(evt) {
    setValueName(evt.target.value);
  }

  function onDescriptionChange(evt) {
    setValueDescription(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onSubmitPopup(valueName, valueDescription);
  }

  function closePopup() {
    setValueName(currentUser.name || '');
    setValueDescription(currentUser.about || '');
    onClose();
  }

  return (
    <PopupWithForm
      name="editForm"
      title="Редактировать профиль"
      isOpen={isOpen}
      onClose={closePopup}
      onSubmitPopup={handleSubmit}
      isUploading={isUploading}
    >
      <fieldset className="popup__fieldset">
        <label>
          <input
            value={valueName}
            onChange={onNameChange}
            className="popup__input popup__input_type_editForm-name"
            id="name-input"
            type="text"
            name="name"
            placeholder="Введите свое имя"
            required
            maxLength="40"
            minLength="2"/>
          <span className="popup__input-error name-input-error"/>

        </label>
        <label>
          <input
            value={valueDescription}
            onChange={onDescriptionChange}
            className="popup__input popup__input_type_editForm-description"
            id="description-input"
            type="text"
            name="about"
            placeholder="Введите свой род занятий"
            required
            maxLength="200"
            minLength="2"/>
          <span className="popup__input-error description-input-error"/>
        </label>
      </fieldset>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
