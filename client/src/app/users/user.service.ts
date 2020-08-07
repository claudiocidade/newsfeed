import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UserModel } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private readonly http:HttpClient ) { }

  async get(id:number):Promise<UserModel> {
    return null;
  }
}
