import './index.css';

import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithDeleteCard from '../components/PopupWithDeleteCard.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';

import {
  popupUserInfo,
  popupEditAvatar,
  popupAddCard,
  popupDeleteCard,
  popupViewCard,
  openPopupUserInfo,
  openPopupAddCard,
  openPopupEditAvatar,
  formPopupUserInfo,
  formPopupEditAvatar,
  formPopupAddCards,
  nameUserInfo,
  aboutUserInfo,
  avatarUserInfo,
  nameUserInfoInput,
  aboutUserInfoInput,
  cardTemplate,
  cardsElement,
  validationConfig
} from '../utils/constants.js';

// Данные пользователя
const userInfo = new UserInfo({
  name: nameUserInfo,
  info: aboutUserInfo,
  avatar: avatarUserInfo
});

// Открытие попапа просмотра карточки
const handleCardClick = (evt) => {
  cardViewPopup.open(evt.target);
}


//Создание новой карточки
const createNewCard = (data) => {
  const card = new Card(cardTemplate, data,  userId, handleCardClick, {
    handleDeleteCard: () => {
      deleteCardPopup.submitRequestDeleteCard(() => {
        api.deleteCard(data)
          .then(() => {
            card.removeCard();
            deleteCardPopup.close();
          })
          .catch((err) => {
            console.log(`При удалении карточки произошла ошибка: ${err}`);
            deleteCardPopup.close();
          });
      });
      deleteCardPopup.open();
    },
    addLike: (data) => {
      api.addLikeCard(data)
        .then((data) => {
          card.setNumberLikes(data);
        })
        .catch((err) => {
          console.log(`При лайке карточки произошла ошибка: ${err}`);
        });
    },
    removeLike: (data) => {
      api.removeLikeCard(data)
        .then((data) => {
          card.setNumberLikes(data);
        })
        .catch((err) => {
          console.log(`При снятии лайка карточки произошла ошибка: ${err}`);
        });
    }
  });

  const cardElement = card.createCard();
  cardList.addItem(cardElement);
};

// Добавление карточек на страницу
const cardList = new Section({
  renderer: (data) => {
    createNewCard(data);
  }
}, cardsElement);


// Работа с API сервера
const api = new Api({
  serverUrl: 'https://mesto.nomoreparties.co/v1/cohort-29/',
  receiveRequestHeaders: {
    authorization: '47bf35c3-c8a1-495a-9dd2-8537c372d068'
  },
  sendRequestHeaders: {
    authorization: '47bf35c3-c8a1-495a-9dd2-8537c372d068',
    'Content-Type': 'application/json'
  }
});

let userId;
// Загрузка данных профиля
api.getUserInfo()
  .then((res) => {
    userInfo.setUserInfo(res);
    userInfo.setUserAvatar(res);
    userId = res._id;
  })
  .catch(err => console.log(`При загрузке данных пользователя произошла ошибка: ${err}`));
// Загрузка карточек
api.getInitialCards()
  .then((res) => {
    cardList.setItem(res);
    console.log(res);
  })
  .catch(err => console.log(`При загрузке данных карточек произошла ошибка: ${err}`));


// Попап редактирования профиля
const userInfoPopup = new PopupWithForm(popupUserInfo,
  function submitUserInfoForm(data) {
    api.patchUserInfo(data)
      .then((res) => {
        userInfo.setUserInfo(res);
    })
      .catch(err => console.log(`При отправке данных пользователя произошла ошибка: ${err}`));
  });
// Попап редактирования аватара пользователя
const editAvatarPopup = new PopupWithForm(popupEditAvatar,
  function submitUserAvatarForm(data) {
    api.patchAvatarUserInfo(data)
      .then((res) => {
        userInfo.setUserAvatar(res);
      })
      .catch(err => console.log(`При отправке данных аватара пользователя произошла ошибка: ${err}`));
  });
// Попап добавления карточки
const addCardPopup = new PopupWithForm(popupAddCard,
  function submitAddCardForm(data) {
    api.patchNewCard(data)
      .then((res) => {
        createNewCard(res);
      })
      .catch(err => console.log(`При отправке данных карточки произошла ошибка: ${err}`));
  });
// Попап удаления карточки
const deleteCardPopup = new PopupWithDeleteCard(popupDeleteCard);
// Попап просмотра фотографии
const cardViewPopup = new PopupWithImage(popupViewCard);


// Валидация формы профиля
const validatorFormEditProfile = new FormValidator(validationConfig, formPopupUserInfo);
validatorFormEditProfile.enableValidation();
// Валидация формы редактирования аватара
const validatorFormEditAvatar = new FormValidator(validationConfig, formPopupEditAvatar);
validatorFormEditAvatar.enableValidation();
// Валидация формы карточки
const validatorFormAddCards = new FormValidator(validationConfig, formPopupAddCards);
validatorFormAddCards.enableValidation();


// Обработчики события для попапов:
// - редактирования профиля
openPopupUserInfo.addEventListener('click', () => {
  nameUserInfoInput.value = userInfo.getUserInfo().name;
  aboutUserInfoInput.value = userInfo.getUserInfo().info;
  validatorFormEditProfile.resetValidation();
  userInfoPopup.open();
});
// - редактирования аватара пользователя
openPopupEditAvatar.addEventListener('click', () => {
  validatorFormEditAvatar.resetValidation();
  editAvatarPopup.open();
});
// - добавления карточки
openPopupAddCard.addEventListener('click', () => {
  validatorFormAddCards.resetValidation();
  addCardPopup.open();
});


// Установка обработчиков на попапы
cardViewPopup.setEventListeners();
userInfoPopup.setEventListeners();
editAvatarPopup.setEventListeners();
addCardPopup.setEventListeners();
deleteCardPopup.setEventListeners();

