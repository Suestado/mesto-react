import { useState, useEffect } from 'react';
import Api from '../utils/Api.js';
import Card from './Card.js';

function Main(props) {

  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
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
        {cards.map((card) => {
          return (
            <Card
              key={card._id}
              cardItem={card}
              onCardClick={props.handleCardClick}
            />);
        })}
      </section>

    </main>
  );
}

export default Main;
