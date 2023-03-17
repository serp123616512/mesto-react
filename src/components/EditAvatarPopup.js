import React from "react";

import PopupWithForm from "./PopupWithForm.js";

function EditAvatarPopup({isOpen, onClose, onSubmit}) {


  return (
    <PopupWithForm
      name={'avatar'}
      title={'Обновить аватар'}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={onSubmit}
      submitButtonText={'Сохранить'}
    >
      <input
        id="avatar-link"
        className="popup__input-text"
        type="url"
        placeholder="Ссылка на новый аватар"
        required
      />
      <span id="avatar-link-error" className="popup__input-error"></span>
    </PopupWithForm>
  )
}

export default EditAvatarPopup;
