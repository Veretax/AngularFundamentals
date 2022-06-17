import { Injectable } from '@angular/core';
//import { BehaviorSubject, Subject } from 'rxjs';
import { IUser } from './user.model';

@Injectable()
export class AuthService
{
  currentUser!: IUser;
  emptyUser!: IUser;
  //profile$: Subject<any> = new BehaviorSubject<any>({});
  constructor() {
    this.emptyUser = {
      id: -1,
      userName: 'guestUser',
      firstName: 'not',
      lastName: 'loggedin'
    };
  }

  //emit(value: any) {
  //  this.profile$.next(value);
  //}

  //get profile(): BehaviorSubject<any> {
  //  return this.profile$ as BehaviorSubject<any>;
  //}
  loginUser(userName: string, password: string)
  {
    this.currentUser = {
      id: 1,
      userName: userName,
      firstName: 'John',
      lastName: 'Papa'
    };
    //this.emit({user: this.currentUser});
    return this.currentUser;
  }

  isAuthenticated(): boolean {
    return !!this.currentUser;
  }

  getLoggedInUser(): IUser {

    if ( this.isAuthenticated() ) {
      return this.currentUser;
    }
    
    return this.emptyUser;
  }

}

