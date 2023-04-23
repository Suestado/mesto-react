export const openedPopupClass = 'popup_opened';
export const generalPopupClass = 'popup';
export const popupCloseBtnClass = 'popup__close';

//переменные для добавления фото карточек
export const photoSection = document.querySelector('.elements');
export const photoAddButton = document.querySelector('.profile__add-button');
export const popupPhotoAddSelector = '.popup_type_photoAdd';

//Переменные для просмотра фото
export const popupFullScreenSelector = '.popup_type_photoFullScreen';
export const popupPicSelector = '.popup__image_type_photoFullScreen';
export const popupFigcaptionSelector = '.popup__substring_type_photoFullScreen';

//Переменные для редактирования данных профиля
export const editButton = document.querySelector('.profile__edit-button');
export const popupForProfileEditForm = '.popup_type_editForm';
export const userNameSelector = '.profile__name';
export const userDescriptionSelector = '.profile__description';
export const avatarUploadButton = document.querySelector('.profile__avatar-wrapper');
export const avatarUploadPopupSelector = '.popup_type_avatarUpload';
export const userAvatarSelector = '.profile__avatar';

//Переменные для удаления фользовательских фото
export const popupDeleteAgreementSelector = '.popup_type_deleteAgreement';


//Объект с селекторами классов для создания карточек мест
export const placeAddSelectors = {
  photoCardTemplateSelector: '#photo-card',
  photoCardElementSelector: '.element',
  photoCardNameSelector: '.element__name',
  photoCardLikeSelector: '.element__like',
  photoCardTrashSelector: '.element__trash',
  photoCardImageSelector: '.element__image',
  photoLikeIsActive: 'element__like_active',
  popupIsFullScreen: '.popup_type_photoFullScreen',
  likesCounterSelector: '.element__like-counter',
};

//Объект с селекторами классов инпутов и форм для валидации
export const formValidationSelectors = {
  formSelector: '.popup__form',
  formInputSelector: '.popup__input',
  formSubmitButtonSelector: '.popup__submit',
  inputElementErrorClass: 'popup__input_type_error',
  errorMessageActiveClass: 'popup__input-error_active',
  submitButtonDisabledClass: 'popup__submit_type_disabled',
};
