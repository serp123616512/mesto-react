import React from "react";

import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";

import ImagePopup from "./ImagePopup.js";
import PopupWithForm from "./PopupWithForm.js";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState({});

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

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({});
  }

  return (
    <>
      <Header />
      <Main
        onEditAvatar={handleAvatarClick}
        onEditProfile={handleProfileClick}
        onAddPlace={handleAddCardClick}
        onCardClick={handleCardClick}
      />
      <Footer />

                {/*  Popups  */}

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />

      <PopupWithForm
        name={'avatar'}
        title={'Обновить аватар'}
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
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

      <PopupWithForm
        name={'profile'}
        title={'Редактировать профиль'}
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        submitButtonText={'Сохранить'}
      >
        <input
          id="name"
          className="popup__input-text"
          type="text"
          placeholder="Имя"
          minLength="2"
          maxLength="40"
          required
        />
        <span id="name-error" className="popup__input-error"></span>
        <input
          id="vocation"
          className="popup__input-text"
          type="text"
          placeholder="О себе"
          minLength="2"
          maxLength="200"
          required
        />
        <span id="vocation-error" className="popup__input-error"></span>
      </PopupWithForm>

      <PopupWithForm
        name={'card'}
        title={'Новое место'}
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
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

      <PopupWithForm
        name={'trash-accept'}
        title={'Вы уверены?'}
        submitButtonText={'Да'}
      />
    </>
  );
}

export default App;
