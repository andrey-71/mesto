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
  submitButtonSelector,
  nameUserInfo,
  aboutUserInfo,
  avatarUserInfo,
  nameUserInfoInput,
  aboutUserInfoInput,
  cardTemplate,
  cardsElement,
  validationConfig
} from '../utils/constants.js';


// Экземпляр класса для работы с сервером
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

// Функция вывода процесса загрузки данных
const renderLoading = (isLoading, popup, textButton) => {
  if(isLoading) {
    popup.querySelector(submitButtonSelector).textContent = textButton;
  } else {
    popup.querySelector(submitButtonSelector).textContent = textButton;
  }
}

// Экземпляр класса для работы с данными пользователя
const userInfo = new UserInfo({
  name: nameUserInfo,
  info: aboutUserInfo,
  avatar: avatarUserInfo
});


// Загрузка данных с сервера
let userId;// Перемення для хранения id пользователя
api.getAppInfo()
  .then(([getUserInfo, getInitialCards]) => {
    userInfo.setUserInfo(getUserInfo);
    userInfo.setUserAvatar(getUserInfo);
    userId = getUserInfo._id;

    cardList.setItem(getInitialCards);
  })
  .catch(err => console.log(`При загрузке данных с сервера произошла ошибка: ${err}`));


// Попап редактирования профиля
const userInfoPopup = new PopupWithForm(popupUserInfo,
  function submitUserInfoForm(data) {
    renderLoading(true, popupUserInfo, 'Сохранение...');
    api.patchUserInfo(data)
      .then((res) => {
        userInfo.setUserInfo(res);
      })
      .catch(err => console.log(`При отправке данных пользователя произошла ошибка: ${err}`))
      .finally(() => {
        renderLoading(false, popupUserInfo, 'Сохранить')
      })
  });
// Попап редактирования аватара пользователя
const editAvatarPopup = new PopupWithForm(popupEditAvatar,
  function submitUserAvatarForm(data) {
    renderLoading(true, popupEditAvatar, 'Сохранение...');
    api.patchAvatarUserInfo(data)
      .then((res) => {
        userInfo.setUserAvatar(res);
      })
      .catch(err => console.log(`При отправке данных аватара пользователя произошла ошибка: ${err}`))
      .finally(() => {
        renderLoading(false, popupEditAvatar, 'Сохранить')
      })
  });

// Попап добавления карточки
const addCardPopup = new PopupWithForm(popupAddCard,
  function submitAddCardForm(data) {
    renderLoading(true, popupAddCard, 'Сохранение...');
    api.patchNewCard(data)
      .then((res) => {
        createNewCard(res);
      })
      .catch(err => console.log(`При отправке данных карточки произошла ошибка: ${err}`))
      .finally(() => {
        renderLoading(false, popupAddCard, 'Создать')
      })
  });
// Попап удаления карточки
const deleteCardPopup = new PopupWithDeleteCard(popupDeleteCard);
// Попап просмотра фотографии
const cardViewPopup = new PopupWithImage(popupViewCard);

// Экземпялр класса для вывода карточек на страницу
const cardList = new Section({
  renderer: (data) => {
    createNewCard(data);
  }
}, cardsElement);


// Валидация формы профиля
const validatorFormEditProfile = new FormValidator(validationConfig, formPopupUserInfo);
validatorFormEditProfile.enableValidation();
// Валидация формы редактирования аватара
const validatorFormEditAvatar = new FormValidator(validationConfig, formPopupEditAvatar);
validatorFormEditAvatar.enableValidation();
// Валидация формы карточки
const validatorFormAddCards = new FormValidator(validationConfig, formPopupAddCards);
validatorFormAddCards.enableValidation();


//Создание новой карточки
const createNewCard = (data) => {
  const card = new Card(cardTemplate, data,  userId, {
    // открытие попапа с изображением карточки
    handleCardClick: () => {
      cardViewPopup.open(data);
    },
    // удаление карточки
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
    // постановка лайка
    addLike: () => {
      api.addLikeCard(data)
        .then((res) => {
          card.setNumberLikes(res);
        })
        .catch((err) => {
          console.log(`При лайке карточки произошла ошибка: ${err}`);
        });
    },
    // удаление лайка
    removeLike: () => {
      api.removeLikeCard(data)
        .then((res) => {
          card.setNumberLikes(res);
        })
        .catch((err) => {
          console.log(`При снятии лайка карточки произошла ошибка: ${err}`);
        });
    }
  });
  // создание карточки и отрисовка на странице
  const cardElement = card.createCard();
  cardList.addItem(cardElement);
};


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

