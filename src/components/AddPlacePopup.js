import React from "react";

import PopupWithForm from "./PopupWithForm.js";

function AddPlacePopup ({isOpen, onClose, onSubmit}) {


  return (
    <PopupWithForm
      name={'card'}
      title={'Новое место'}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={onSubmit}
      submitButtonText={'Создать'}
    >
      <input
        id="title"
        className="popup__input-text"
        type="text"
        placeholder="Название"
        minLength="2"
        maxLength="30"
        required
      />
      <span id="title-error" className="popup__input-error"></span>
      <input
        id="link"
        className="popup__input-text"
        type="url"
        placeholder="Ссылка на картинку"
        required
      />
      <span id="link-error" className="popup__input-error"></span>
    </PopupWithForm>
  )
}

export default AddPlacePopup;
