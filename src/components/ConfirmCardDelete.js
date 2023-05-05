import PopupWithForm from './PopupWithForm.js';

function ConfirmCardDelete({ isOpen, onClose, onSubmitPopup, isUploading }) {

  function handleSubmit(evt) {
    evt.preventDefault();
    onSubmitPopup();
  }

  return (
    <PopupWithForm
      name="cardDeleteConfirmation"
      title="Вы уверены?"
      submitText="Да"
      isOpen={isOpen}
      onClose={onClose}
      onSubmitPopup={handleSubmit}
      isUploading={isUploading}
    />
  );
}

export default ConfirmCardDelete;
