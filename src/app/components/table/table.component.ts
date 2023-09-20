import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {tableFields} from "../../constants/constants";
import {User, UserFields} from "../../interfaces/user.interface";
import {UsersService} from "../../services/users.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, OnDestroy {
  public tableUserFields: UserFields[] = tableFields;
  public users: User[] = [];
  private subscription: Subscription = new Subscription();

  @Output() setUserToEdit: EventEmitter<User> = new EventEmitter<User>();

  constructor(private readonly usersService: UsersService) {
  }

  ngOnInit() {
    this.subscription.add(this.usersService.usersList.subscribe((users: User[]) => {
      this.users = users;
    }));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public editUser (user: User): void {
    this.setUserToEdit.emit(user);
  }

  public removeUser (user: User): void {
    this.usersService.removeUser(user.id || 0);
  }
}
