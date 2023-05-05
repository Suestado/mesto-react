function PopupWithForm(props) {

  return (
    <div className={`popup popup_type_editForm ${props.isOpen && 'popup_opened'}`}>
      <div className="popup__container">
        <h2 className={`popup__title popup__title_type_${props.name}`}>{props.title}</h2>
        <form
          className="popup__form"
          id="profileEdit-form"
          action="#"
          method="post"
          name={`${props.name}`} //editForm
          noValidate
          onSubmit={props.onSubmitPopup}
        >
          {props.children}
          <button
            className={`popup__close popup__close_type_${props.name}`}
            type="button"
            onClick={props.onClose}
          />
          <button
            className={`popup__submit popup__submit_type_${props.name}`}
            type="submit"
            value={props.submitText}
            name={`submit_${props.name}`}
            id={`submit_${props.name}`}>{props.submitText || 'Сохранить'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
