import {BehaviorSubject} from "rxjs";
import {User} from "../interfaces/user.interface";
import {UserTypes} from "../enums/enums";

const users: User[] = [
  {
    id: 1,
    username: 'user1',
    firstname: 'John',
    lastname: 'Doe',
    email: 'john.doe@example.com',
    password: 'password1',
    type: UserTypes.Driver,
  },
  {
    id: 2,
    username: 'user2',
    firstname: 'Jane',
    lastname: 'Smith',
    email: 'jane.smith@example.com',
    password: 'password2',
    type: UserTypes.Driver,
  },
  {
    id: 3,
    username: 'admin1',
    firstname: 'Admin',
    lastname: 'User',
    email: 'admin.user@example.com',
    password: 'adminpassword',
    type: UserTypes.Admin,
  },
  {
    id: 4,
    username: 'user3',
    firstname: 'Alice',
    lastname: 'Johnson',
    email: 'alice.johnson@example.com',
    password: 'password3',
    type: UserTypes.Driver,
  },
  {
    id: 5,
    username: 'user4',
    firstname: 'Bob',
    lastname: 'Wilson',
    email: 'bob.wilson@example.com',
    password: 'password4',
    type: UserTypes.Driver,
  },
  {
    id: 6,
    username: 'admin2',
    firstname: 'Admin2',
    lastname: 'Admin2',
    email: 'admin2@example.com',
    password: 'admin2password',
    type: UserTypes.Admin,
  },
  {
    id: 7,
    username: 'user5',
    firstname: 'Eva',
    lastname: 'Brown',
    email: 'eva.brown@example.com',
    password: 'password5',
    type: UserTypes.Driver,
  },
  {
    id: 8,
    username: 'user6',
    firstname: 'Michael',
    lastname: 'Lee',
    email: 'michael.lee@example.com',
    password: 'password6',
    type: UserTypes.Driver,
  },
  {
    id: 9,
    username: 'admin3',
    firstname: 'Admin3',
    lastname: 'Admin3',
    email: 'admin3@example.com',
    password: 'admin3password',
    type: UserTypes.Admin,
  },
  {
    id: 10,
    username: 'user7',
    firstname: 'Olivia',
    lastname: 'Clark',
    email: 'olivia.clark@example.com',
    password: 'password7',
    type: UserTypes.Driver,
  },
];

export class UsersService {
  public usersList: BehaviorSubject<User[]> = new BehaviorSubject<User[]>(users);

  public createUser(user: User): void {
    user.id = Math.random();
    const userList: User[] = this.usersList.getValue();

    userList.push(user);
    this.usersList.next(userList);
  }

  public editUser(user: User) {
    const users: User[] = this.usersList.getValue();
    const userIndex = users.findIndex((item: User) => item.id === user.id);

    if (userIndex > -1) {
      users[userIndex] = user;
    }

    this.usersList.next([...users]);
  }

  public removeUser(userId: number) {
    const users: User[] = this.usersList.getValue();

    this.usersList.next(users.filter((user: User) => user.id !== userId));
  }
}
