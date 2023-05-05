import { useRef } from 'react';
import PopupWithForm from './PopupWithForm.js';

function EditAvatarPopup({ isOpen, onClose, onSubmitPopup}) {
  const inputRef = useRef();

  function handleSubmit(evt) {
    evt.preventDefault();
    onSubmitPopup(inputRef.current.value);
    inputRef.current.value = '';
  }

  return (
    <PopupWithForm
      name="avatarUpload"
      title="Обновить аватар"
      isOpen={isOpen}
      onClose={onClose}
      onSubmitPopup={handleSubmit}
    >
      <fieldset className="popup__fieldset"
                id="avatarUpload-popup-fieldset">
        <label>
          <input
            ref={inputRef}
            className="popup__input popup__input_type_avatarUpload"
            type="url"
            name="avatar"
            id="avatarUpload-input-url"
            placeholder="Ссылка на картинку"
            required
            minLength="2"/>
          <span className="popup__input-error avatarUpload-input-url-error"/>
        </label>
      </fieldset>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
