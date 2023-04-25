import { useState } from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';


function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsImagePopupOpen(false);
  }

  return (
    <>
      <Header/>
      <Main
        onEditProfile={() => setIsEditProfilePopupOpen(!isEditProfilePopupOpen)}
        onAddPlace={() => setIsAddPlacePopupOpen(!isAddPlacePopupOpen)}
        onEditAvatar={() => setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen)}
        onImagePopup={() => setIsImagePopupOpen(!setIsImagePopupOpen)}
        onClose={closeAllPopups}
        isEditProfilePopupOpen={isEditProfilePopupOpen}
        isAddPlacePopupOpen={isAddPlacePopupOpen}
        isEditAvatarPopupOpen={isEditAvatarPopupOpen}
        isImagePopupOpen={isImagePopupOpen}
        handleCardClick={(evt) => {
          setSelectedCard(evt.target);
          setIsImagePopupOpen(!isImagePopupOpen);
        }}
        card={selectedCard}
      />

      <Footer/>

      <PopupWithForm
        name="editForm"
        title="Редактировать профиль"
        submitText="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}>
        <fieldset className="popup__fieldset">
          <label>
            <input className="popup__input popup__input_type_editForm-name"
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
            <input className="popup__input popup__input_type_editForm-description"
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

      <PopupWithForm
        name="photoAdd"
        title="Новое место"
        submitText="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}>
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

      <PopupWithForm
        name="avatarUpload"
        title="Обновить аватар"
        submitText="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}>
        <fieldset className="popup__fieldset"
                  id="avatarUpload-popup-fieldset">
          <label>
            <input className="popup__input popup__input_type_avatarUpload"
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

      <ImagePopup
        isImagePopupOpen={isImagePopupOpen}
        card={selectedCard}
        onClose={closeAllPopups}
      />
    </>
  );
}

export default App;
