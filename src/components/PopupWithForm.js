import React from "react";

function PopupWithForm(props) {
  return (
    <section id={props.name} className={`popup ${props.isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        <button className="popup__close-btn button-hover" onClick={props.onClose}></button>
        <form name={`${props.name}-form`} className="popup__content" >
          <h1 className="popup__heading">{props.title}</h1>
          {props.children}
        </form>
      </div>
    </section>
  )
}

export default PopupWithForm;
