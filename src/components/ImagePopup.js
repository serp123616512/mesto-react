import React from "react";

function ImagePopap(props) {
  return (
    <section id="picture" className={`popup popup_dark ${props.card.link ? 'popup_opened' : ''}`}>
      <div className="popup__container-pic">
        <button className="popup__close-btn button-hover" onClick={props.onClose}></button>
        <img className="popup__pic" src={props.card.link} alt={props.card.name} />
        <p className="popup__title">{props.card.name}</p>
      </div>
    </section>
  )
};

export default ImagePopap;
