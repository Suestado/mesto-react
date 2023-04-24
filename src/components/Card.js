function Card(props) {

  return (
    <article className="element">
      <img className="element__image"
           src={props.cardItem.link}
           alt={props.cardItem.name}
           onClick={props.onCardClick}/>
      <div className="element__group-name">
        <h2 className="element__name">{props.cardItem.name}</h2>
        <div className="element__like-wrapper">
          <button className="element__like" type="button"/>
          <p className="element__like-counter">{props.cardItem.likes.length}</p>
        </div>
      </div>
      <button className="element__trash" type="button"/>
    </article>
  );
}

export default Card;
