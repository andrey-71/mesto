export default class Api {
  constructor(options) {
    this._serverUrl = options.serverUrl;
    this._receiveRequestHeaders = options.receiveRequestHeaders
    this._sendRequestHeaders = options.sendRequestHeaders;
  }

  _handleResult(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`"${res.status} ${res.statusText}"`);
  }

  // Получение данных пользователя
  getUserInfo() {
    return fetch(`${this._serverUrl}users/me`, {
      headers: this._receiveRequestHeaders
    })
      .then(res => this._handleResult(res));
  }

  // Получение начальных карточек
  getInitialCards() {
    return fetch(`${this._serverUrl}cards`, {
      headers: this._receiveRequestHeaders
    })
      .then(res => this._handleResult(res));
  }

  // Отправка данных пользователя
  patchUserInfo(data) {
    return fetch(`${this._serverUrl}users/me`, {
      method: 'PATCH',
      headers: this._sendRequestHeaders,
      body: JSON.stringify({
        name: data.nameUser,
        about: data.infoUser
      })
    })
      .then(res => this._handleResult(res));
  }

  // Отправка аватара пользователя
  patchAvatarUserInfo(data) {
    return fetch(`${this._serverUrl}users/me/avatar`, {
      method: 'PATCH',
      headers: this._sendRequestHeaders,
      body: JSON.stringify({
        avatar: data.avatarUser
      })
    })
      .then(res => this._handleResult(res));
  }

  // Отправка новой карточки
  patchNewCard(data) {
    return fetch(`${this._serverUrl}cards`, {
      method: 'POST',
      headers: this._sendRequestHeaders,
      body: JSON.stringify({
        name: data.name,
        link: data.link
      })
    })
      .then(res => this._handleResult(res));
  }

  // Удаление карточки
  deleteCard(data) {
    return fetch(`${this._serverUrl}cards/${data._id}`, {
      method: 'DELETE',
      headers: this._receiveRequestHeaders
    })
      .then(res => this._handleResult(res));
  }

}
