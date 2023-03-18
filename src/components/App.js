import React, { useEffect, useState } from "react";

import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";

import ImagePopup from "./ImagePopup.js";
import EditAvatarPopup from "./EditAvatarPopup.js";
import EditProfilePopup from "./EditProfilePopup.js";
import AddPlacePopup from "./AddPlacePopup.js";
import AcceptDeleteCardPopup from "./AcceptDeleteCardPopup.js";

import api from "../utils/api.js";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isAcceptDeleteCardPopupOpen, setAcceptDeleteCardPopupOpen] = useState(false);
  const [cardId, setCardId] = useState('');

  const [selectedCard, setSelectedCard] = useState({});

  function handleAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  };

  function handleProfileClick() {
    setIsEditProfilePopupOpen(true);
  };

  function handleAddCardClick() {
    setIsAddPlacePopupOpen(true);
  };

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleTrashClick(cardId) {
    setAcceptDeleteCardPopupOpen(true);
    setCardId(cardId);
  }

  function handleUpdateAvatar({avatar}) {
    api
    .patchUserAvatar({avatar})
    .then(user => {
      setCurrentUser(user);
      closeAllPopups();
    })
    .catch(console.log);
  }

  function handleUpdateUser({name, vocation}) {
    api
    .patchUserInfo({name, vocation})
    .then(user => {
      setCurrentUser(user);
      closeAllPopups();
    })
    .catch(console.log);
  }

  function handleAddPlace({title, link}) {
    api
    .postCard({title, link})
    .then(newCard => {
      setCards([newCard, ...cards]);
      closeAllPopups();
    })
    .catch(console.log);
  }

  function handleAcceptDeleteCard(cardId) {
    api
    .deleteCard(cardId)
    .then(() => {
      setCards(cards => cards.filter((c) => c._id !== cardId));
      closeAllPopups();
    })
    .catch(console.log);
  }

  function handleCardLike(cardId) {
    api
    .putLike(cardId)
    .then(newCard => {
      setCards(cards => cards.map(c => c._id === cardId ? newCard : c));
    })
    .catch(console.log);
  }

  function handleCardDislike(cardId) {
    api
    .deleteLike(cardId)
    .then(newCard => {
      setCards(cards => cards.map(c => c._id === cardId ? newCard : c));
    })
    .catch(console.log);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({});
    setAcceptDeleteCardPopupOpen('');
  }

  useEffect(() => {
    Promise.all([api.getUserData(), api.getCardData()])
    .then(([userData, cardData]) => {
      setCurrentUser(userData);
      setCards(cardData);
    })
    .catch(console.log);
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Header />
      <Main
        onEditAvatar={handleAvatarClick}
        onEditProfile={handleProfileClick}
        onAddPlace={handleAddCardClick}
        cards={cards}
        onCardClick={handleCardClick}
        onTrashClick={handleTrashClick}
        onCardLike={handleCardLike}
        onCardDislike={handleCardDislike}
      />
      <Footer />
      {/*  Popups  */}
      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
      />
      <EditAvatarPopup
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        onUpdateUser={handleUpdateAvatar}
      />
      <EditProfilePopup
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        onUpdateUser={handleUpdateUser}
      />
      <AddPlacePopup
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        onAddPlace={handleAddPlace}
      />
      <AcceptDeleteCardPopup
        cardId={cardId}
        isOpen={isAcceptDeleteCardPopupOpen}
        onClose={closeAllPopups}
        onAcceptDeleteCard={handleAcceptDeleteCard}
      />
    </CurrentUserContext.Provider>
  );
}

export default App;
