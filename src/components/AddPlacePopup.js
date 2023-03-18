import React from "react";

import PopupWithForm from "./PopupWithForm.js";

function AddPlacePopup ({isOpen, onClose, onAddPlace}) {
  const title = React.useRef('');
  const link = React.useRef('');

  function handleSubmit(e) {
    e.preventDefault();

    onAddPlace({
      title: title.current.value || '',
      link: link.current.value || ''
    })

    e.target.reset();
  }

  return (
    <PopupWithForm
      name={'card'}
      title={'Новое место'}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
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
        ref={title}
        defaultValue={''}
      />
      <span id="title-error" className="popup__input-error"></span>
      <input
        id="link"
        className="popup__input-text"
        type="url"
        placeholder="Ссылка на картинку"
        required
        ref={link}
        defaultValue={''}
      />
      <span id="link-error" className="popup__input-error"></span>
    </PopupWithForm>
  )
}

export default AddPlacePopup;
