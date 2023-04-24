import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';


function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsImagePopupOpen(false);
  }

  return (
    <body className="page">

    <Header/>
    <Main
      onEditProfile = {() => setIsEditProfilePopupOpen(!isEditProfilePopupOpen)}
      onAddPlace = {() => setIsAddPlacePopupOpen(!isAddPlacePopupOpen)}
      onEditAvatar = {() => setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen)}
      onImagePopup = {() => setIsImagePopupOpen(!setIsImagePopupOpen)}
      onClose = {closeAllPopups}
      isEditProfilePopupOpen = {isEditProfilePopupOpen}
      isAddPlacePopupOpen = {isAddPlacePopupOpen}
      isEditAvatarPopupOpen = {isEditAvatarPopupOpen}
      isImagePopupOpen = {isImagePopupOpen}
      handleCardClick = {(evt) => {
        setSelectedCard(evt.target);
        setIsImagePopupOpen(!isImagePopupOpen);
      }}
      card = {selectedCard}
    />

    <Footer/>
    </body>
  );
}

export default App;
