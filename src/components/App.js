import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
  }

  React.useEffect(() => {
    function escClosePopup(evt) {
      if(evt.key === 'Escape') {
        closeAllPopups();
      }
    }
    document.addEventListener('keydown', escClosePopup)
    return () => {
      document.removeEventListener('keydown', escClosePopup)
    }
  })

  return (
    <body className="page">

    <Header/>
    <Main
      onEditProfile = {() => setIsEditProfilePopupOpen(!isEditProfilePopupOpen)}
      onAddPlace = {() => setIsAddPlacePopupOpen(!isAddPlacePopupOpen)}
      onEditAvatar = {() => setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen)}
      closeAllPopups = {closeAllPopups}
      isEditProfilePopupOpen = {isEditProfilePopupOpen}
      isAddPlacePopupOpen = {isAddPlacePopupOpen}
      isEditAvatarPopupOpen = {isEditAvatarPopupOpen}
    />


    <div className="popup popup_type_photoFullScreen">
      <figure className="popup__picContainer popup__picContainer_type_photoFullScreen">
        <img className="popup__image popup__image_type_photoFullScreen" src="#" alt=""/>
        <figcaption className="popup__substring popup__substring_type_photoFullScreen"/>
        <div className="popup__close popup__close_type_photoFullScreen"/>
      </figure>
    </div>

    <div className="popup popup_type_deleteAgreement">
      <div className="popup__container">
        <form className="popup__form"
              action="#"
              method="post"
              name="deleteAgreement-form"
              id="deleteAgreement-form"
              noValidate>
          <h2 className="popup__title popup__title_type_deleteAgreement">Вы уверены?</h2>
          <button className="popup__submit popup__submit_type_deleteAgreement"
                  type="submit"
                  value="Да"
                  name="deleteAgreementBtn"
                  id="deleteAgreementBtn">Да
          </button>
        </form>
        <button className="popup__close popup__close_type_deleteAgreement" type="button"/>
      </div>
    </div>


    <template id="photo-card">
      <article className="element">
        <img className="element__image"
             src="#"
             alt=""/>
        <div className="element__group-name">
          <h2 className="element__name"/>
          <div className="element__like-wrapper">
            <button className="element__like" type="button"/>
            <p className="element__like-counter"/>
          </div>
        </div>
        <button className="element__trash" type="button"/>
      </article>
    </template>

    <Footer/>

    </body>
  );
}

export default App;
