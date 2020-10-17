import { Observable, Observer } from 'rxjs';
import { User } from '../models/usermodel';

export class UserMockService {
    users: User[] = [];
   public mockUser = {
        role: 1,
        name: ' Ahsan Hameed khan',
        joining: '2020-10-28T20:00:00.000Z',
        education: 'Masters (MCS)',
        hobbies: [
            'Singing',
            'Dancing'
        ],
        id: 'f9b67508-0171-4df9-82cc-1ee9f2d3f226',
        username: 'user',
        password: '1234'
    };
    getUsersList(): Observable<User[]> {
        return new Observable((observer: Observer<User[]>) => {
            observer.next(this.users);
        });
    }
}
