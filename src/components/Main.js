import { useState, useEffect, useContext } from 'react';
import Api from '../utils/Api.js';
import Card from './Card.js';
import { CurrentUserContext } from '../context/CurrentUserContext.js';

function Main(props) {

  const currentUserContext = useContext(CurrentUserContext);


  useEffect(() => {
    Api.getInitialCards()
      .then((data) => props.setCards(data))
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
               src={currentUserContext.avatar}
               alt="Аватар"/>
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{currentUserContext.name}</h1>
          <p className="profile__description">{currentUserContext.about}</p>
        </div>
        <button className="profile__edit-button"
                type="button"
                onClick={props.onEditProfile}/>
        <button className="add-button profile__add-button"
                type="button"
                onClick={props.onAddPlace}/>
      </section>

      <section className="elements">
        {props.cards.map((card) => {
          return (
            <Card
              key={card._id}
              cardItem={card}
              onCardClick={props.handleCardClick}
              onCardLike={props.onCardLike}
            />);
        })}
      </section>

    </main>
  );
}

export default Main;
