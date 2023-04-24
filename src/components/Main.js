import React from 'react';
import PopupWithForm from './PopupWithForm.js';
import Api from './utils/Api.js';
import Card from './Card.js';
import ImagePopup from './ImagePopup.js';

function Main(props) {

  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Api.getUserInfo()
      .then((data) => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
      })
      .catch((err) => {
        console.log(`Данные пользователя не могут быть загружены с сервера: Error: ${err}`);
      });

    Api.getInitialCards()
      .then((data) => setCards(data))
      .catch((err) => {
        console.log(`Стартовые карточки не могут быть загружены с сервера: Error: ${err}`);
      });
  }, []);

  const cardsList = cards.map((card) => {
    return (
      <Card
        key={card._id}
        cardItem={card}
        onCardClick={props.handleCardClick}
      />);
  });

  return (
    <main className="main-content">
      <section className="profile">
        <div
          className="profile__avatar-wrapper"
          onClick={props.onEditAvatar}>
          <img className="profile__avatar"
               src={userAvatar}
               alt="Аватар"/>
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <p className="profile__description">{userDescription}</p>
        </div>
        <button className="profile__edit-button"
                type="button"
                onClick={props.onEditProfile}/>
        <button className="add-button profile__add-button"
                type="button"
                onClick={props.onAddPlace}/>
      </section>

      <section className="elements">
        {cardsList}
      </section>

      <PopupWithForm
        name="editForm"
        title="Редактировать профиль"
        submitText="Сохранить"
        isOpen={props.isEditProfilePopupOpen}
        onClose={props.onClose}>
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
        isOpen={props.isAddPlacePopupOpen}
        isClose={props.onClose}>
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
        isOpen={props.isEditAvatarPopupOpen}
        isClose={props.onClose}>
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
        handleCardClick={props.handleCardClick}
        isImagePopupOpen={props.isImagePopupOpen}
        card={props.card}
        onClose={props.onClose}
      />
    </main>
  );
}

export default Main;
