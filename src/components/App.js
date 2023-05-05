import { useState, useEffect } from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';
import ImagePopup from './ImagePopup.js';
import EditProfilePopup from './EditProfilePopup.js';
import EditAvatarPopup from './EditAvatarPopup.js';
import AddPlacePopup from './AddPlacePopup.js';
import Api from '../utils/Api';
import { CurrentUserContext } from '../context/CurrentUserContext.js';



function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    Api.getUserInfo()
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => {
        console.log(`Данные пользователя не могут быть загружены с сервера: Error: ${err}`);
      });
  }, []);

  useEffect(() => {
    Api.getInitialCards()
      .then((data) => setCards(data))
      .catch((err) => {
        console.log(`Стартовые карточки не могут быть загружены с сервера: Error: ${err}`);
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
      .then((newCard) => setCards((cards) => cards.map((item) => item._id === card._id ? newCard : item)))
      .catch((err) => console.log(`Лайк не может быть поставлен: Error: ${err}`));
  }

  function handleCardDelete(card) {
    Api.removeCard(card._id)
      .then(() => setCards(cards.filter((item) => item._id !== card._id)))
      .catch((err) => console.log(`Карточка не может быть удалена: Error: ${err}`));
  }

  function handleUpdateUser(name, about) {
    setIsUploading(true);
    Api.setUserInfo(name, about)
      .then((data) => setCurrentUser(data))
      .catch((err) => console.log(`Данные пользователя не могут быть обновлены: Error: ${err}`))
      .finally(() => {
        closeAllPopups();
        setIsUploading(false);
      });
  }

  function handleUpdateAvatar(avatar) {
    setIsUploading(true);
    Api.setUserAvatar(avatar)
      .then((data) => setCurrentUser(data))
      .catch((err) => console.log(`Аватар пользователя не может быть обновлен: Error: ${err}`))
      .finally(() => {
        closeAllPopups();
        setIsUploading(false);
      });
  }

  function handleAddPlace(name, link) {
    setIsUploading(true);
    Api.uploadUserCard(name, link)
      .then((newCard) => setCards([newCard, ...cards]))
      .catch((err) => console.log(`Карточка пользователя не может быть добавлена: Error: ${err}`))
      .finally(() => {
        closeAllPopups();
        setIsUploading(false);
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
        cards={cards}
        onCardLike={handleCardLike}
        onCardDelete={handleCardDelete}
      />

      <Footer/>

      <EditProfilePopup
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        onSubmitPopup={handleUpdateUser}
        isUploading={isUploading}
      />

      <AddPlacePopup
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        onSubmitPopup={handleAddPlace}
        isUploading={isUploading}
      />

      <EditAvatarPopup
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        onSubmitPopup={handleUpdateAvatar}
        isUploading={isUploading}
      />

      <ImagePopup
        isImagePopupOpen={isImagePopupOpen}
        card={selectedCard}
        onClose={closeAllPopups}
      />

    </CurrentUserContext.Provider>
  );
}

export default App;
