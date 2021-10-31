export default class UserInfo {
  constructor({name, info, avatar}) {
    this._userName = name;
    this._userInfo = info;
    this._userAvatar = avatar;
  }

  // Собрать данные пользователя из инпутов
  getUserInfo() {
    return {
      name: this._userName.textContent,
      info: this._userInfo.textContent
    }
  }
  // Отрисовать данные пользователя на странице
  setUserInfo(data) {
    this._userName.textContent = data.name;
    this._userInfo.textContent = data.about;
  }

  // Отрисовать аватар пользователя на странице
  setUserAvatar(data) {
    this._userAvatar.src = data.avatar;
  }

  // Получить id Пользователя
  userId(data) {
    const id = data._id;
    return id;
  }
}
