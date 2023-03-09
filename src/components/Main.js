import React, { useEffect } from "react";

import Card from "./Card.js";

import { api } from "../utils/api.js";

function Main(props) {
  const [userAvatar, setUserAvatar] = React.useState('');
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [cards, setCards] = React.useState([]);

  useEffect(() => {
    Promise.all([api.getUserData(), api.getCardData()])
    .then(([userData, cardData]) => {
      setUserAvatar(userData.avatar);
      setUserName(userData.name);
      setUserDescription(userData.about);
      setCards(cardData);
    })
    .catch(console.log);
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__info">
          <div className="profile__avatar-wrapper">
            <img className="profile__avatar" src={userAvatar} alt="Твой аватар." onClick={props.onEditAvatar} />
          </div>
          <div className="profile__intro">
            <p className="profile__name">{userName}</p>
            <button className="profile__edit-btn button-hover" onClick={props.onEditProfile}></button>
            <p className="profile__vocation">{userDescription}</p>
          </div>
        </div>
        <button className="profile__add-btn button-hover" onClick={props.onAddPlace}></button>
      </section>
      <section className="places">
        <ul className="cards">
          {cards.map(card => {
            return(
              <li key={card._id} className="card">
              <Card card={card} onCardClick={props.onCardClick} />
              </li>
            )
          })}
        </ul>
      </section>
    </main>
  )
}

export default Main;
