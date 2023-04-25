function Card({ cardItem, onCardClick }) {

  return (
    <article className="element">
      <img className="element__image"
           src={cardItem.link}
           alt={cardItem.name}
           onClick={onCardClick}/>
      <div className="element__group-name">
        <h2 className="element__name">{cardItem.name}</h2>
        <div className="element__like-wrapper">
          <button className="element__like" type="button"/>
          <p className="element__like-counter">{cardItem.likes.length}</p>
        </div>
      </div>
      <button className="element__trash" type="button"/>
    </article>
  );
}

export default Card;
