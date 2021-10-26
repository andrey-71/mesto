export default class UserInfo {
  constructor({name, info}) {
    this._userName = name;
    this._userInfo = info;
  }

  getUserInfo() {
    return {
      name: this._userName.textContent,
      info: this._userInfo.textContent
    }
  }

  setUserInfo(data) {
    this._userName.textContent = data.nameUser;
    this._userInfo.textContent = data.infoUser;
  }
}
