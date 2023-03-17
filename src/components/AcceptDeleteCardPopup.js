import React from "react";

import PopupWithForm from "./PopupWithForm.js";

function AcceptDeleteCardPopup({isOpen, onClose, onSubmit}) {


  return (
    <PopupWithForm
      name={'trash-accept'}
      title={'Вы уверены?'}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={onSubmit}
      submitButtonText={'Да'}
    />
  )
}

export default AcceptDeleteCardPopup;
