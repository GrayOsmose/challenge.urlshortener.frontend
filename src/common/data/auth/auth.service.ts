import { Injectable } from '@angular/core';

import { Http, Response, RequestOptions, Headers } from '@angular/http';

import { UserModel } from './user.model';

@Injectable()
export class AuthService {

  private static defaultPath: string = '/api/user/';
  private static UserSessionKey: string = 'UserKey';

  private currentUser: UserModel = null;

  constructor (private http: Http) {
    this.currentUser = <UserModel> JSON.parse(sessionStorage.
                                                   getItem(AuthService.UserSessionKey));

    if (this.currentUser !== null) { return; }


  }

  public getUser(): Promise<UserModel> {

    if (this.currentUser !== null) { return new Promise(() => { return this.currentUser; }); }

    return this.getUserData()
               .then((userData) => { return new UserModel(userData); })
               .then((userModel) => {
                 this.setUserData(userModel);
                 return userModel;
                });
  }

  private getUserData(): Promise<any> {
    // ToDo : get data from the service
    return null;
  }

  private setUserData(user: UserModel): void {
    this.currentUser = user;

    sessionStorage.setItem(AuthService.UserSessionKey,
                                       JSON.stringify(this.currentUser));
  }
}
