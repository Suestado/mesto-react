import { useState, useEffect } from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import Api from '../utils/Api';
import { CurrentUserContext } from '../context/CurrentUserContext.js';


function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Api.getUserInfo()
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => {
        console.log(`Данные пользователя не могут быть загружены с сервера: Error: ${err}`);
      });
  }, []);

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsImagePopupOpen(false);
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(user => user._id === currentUser._id);

    Api.uploadLikeStatus(isLiked, card._id)
      .then((newCard) => {
        setCards((cards) => cards.map((item) => item._id === card._id ? newCard : item));
      });
  }


  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Header/>
      <Main
        onEditProfile={() => setIsEditProfilePopupOpen(!isEditProfilePopupOpen)}
        onAddPlace={() => setIsAddPlacePopupOpen(!isAddPlacePopupOpen)}
        onEditAvatar={() => setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen)}
        onImagePopup={() => setIsImagePopupOpen(!setIsImagePopupOpen)}
        onClose={closeAllPopups}
        isImagePopupOpen={isImagePopupOpen}
        handleCardClick={(evt) => {
          setSelectedCard(evt.target);
          setIsImagePopupOpen(!isImagePopupOpen);
        }}
        onCardLike={handleCardLike}
        cards={cards}
        setCards={setCards}
      />

      <Footer/>

      <PopupWithForm
        name="editForm"
        title="Редактировать профиль"
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
    </CurrentUserContext.Provider>
  );
}

export default App;
