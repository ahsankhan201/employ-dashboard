import { generateUniqueId } from '../utils/util';
import { Roles } from './enums';

export class User {
  id: string;
  role = Roles.User;
  name = '';
  joining = new Date();
  education = '';
  hobbies: string[] = [];
  username: string;
  password: string;

  constructor(id?: string) {
    if (id) {
      this.id = id;
    }
  }
  createNewUser() {
    return new User(generateUniqueId());
  }
}
