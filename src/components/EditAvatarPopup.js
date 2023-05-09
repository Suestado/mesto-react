import { useRef, useEffect } from 'react';
import PopupWithForm from './PopupWithForm.js';

function EditAvatarPopup({ isOpen, onClose, onSubmitPopup, isUploading }) {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.value = '';
  }, [isOpen])

  function onSubmit(evt) {
    evt.preventDefault();
    onSubmitPopup(inputRef.current.value);
  }

  return (
    <PopupWithForm
      name="avatarUpload"
      title="Обновить аватар"
      isOpen={isOpen}
      onClose={onClose}
      onSubmitPopup={onSubmit}
      isUploading={isUploading}
    >
      <fieldset className="popup__fieldset"
                id="avatarUpload-popup-fieldset">
        <label>
          <input
            ref={inputRef}
            className="popup__input popup__input_type_avatarUpload"
            type="url"
            id="avatarUpload-input-url"
            placeholder="Ссылка на картинку"
            name="avatar"
            required
            minLength="2"
          />
          <span
            className="popup__input-error avatarUpload-input-url-error">
          </span>
        </label>
      </fieldset>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
