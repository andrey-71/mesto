export default class UserInfo {
  constructor({name, info, avatar}) {
    this._userName = name;
    this._userInfo = info;
    this._userAvatar = avatar;
  }

  // Получить id пользователя
  get getUserId() {
    return this._userId;
  }

  // Получить данные пользователей
  getUserInfo() {
    return {
      name: this._userName.textContent,
      info: this._userInfo.textContent,
      avatar: this._userAvatar.src,
      // id: this._userId
    }
  }
  // Отрисовать данные пользователя на странице
  setUserInfo(data) {
    this._userName.textContent = data.name;
    this._userInfo.textContent = data.about;
    // сохранить id пользователя
    this._userId = data._id;
  }

  // Отрисовать аватар пользователя на странице
  setUserAvatar(data) {
    this._userAvatar.src = data.avatar;
  }
}
