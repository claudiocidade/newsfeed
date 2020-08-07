import { Injectable } from '@nestjs/common';

import { IUserModel } from './user.model';

@Injectable()
export class UserService {
  async get(id:number):Promise<IUserModel> {
    return { id: id, name: 'Claudio Cidade'};
  }
}
