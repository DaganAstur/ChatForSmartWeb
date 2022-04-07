import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userName!: string;
  private password!: string;

  constructor() {
    this.loadCurrentUser()
   }

  loadCurrentUser(): void {
    // Decode token to get user login data
    const values = atob(sessionStorage.getItem('token') || '').split(':');
    if (values){
      this.userName = values[0];
      this.password = values[1];
    }
  }
  
  getUserName(){
    return this.userName;
  }

  getPassword(){
    return this.password;
  }

}
