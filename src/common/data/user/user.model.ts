export class UserModel {
  public UserGuid: string;

  constructor(json) {
    this.UserGuid = json.userGuid;
  }
}
