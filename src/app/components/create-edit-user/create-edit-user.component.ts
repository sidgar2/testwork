import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NotificationTypes, UserFormTypes, UserTableFields} from "../../enums/enums";
import {User, UserFormField} from "../../interfaces/user.interface";
import {AddAndEditFormFields} from "../../constants/constants";
import {NotificationService} from "../../services/notification.service";
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-create-edit-user',
  templateUrl: './create-edit-user.component.html',
  styleUrls: ['./create-edit-user.component.css']
})
export class CreateEditUserComponent implements OnChanges {
  public formData: FormGroup = new FormGroup({});
  public addAndEditFormFields: UserFormField[] = AddAndEditFormFields;
  public userFormTypes = UserFormTypes;
  private usernames: (string | undefined)[] = [];

  @Input() user: User | null = null;
  @Output() removeForm: EventEmitter<void> = new EventEmitter<void>();

  constructor(private readonly notificationService: NotificationService, private readonly usersService: UsersService) {
  }

  ngOnChanges() {
    this.usersService.usersList.subscribe((users: User[]) => this.usernames = users.map((user: User) => user.username));
    this.formData = new FormGroup({
      [UserTableFields.UserName]: new FormControl(this.user?.[UserTableFields.UserName] || '', [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9]*$'),
        this.isUsernameExist.bind(this)
      ]),
      [UserTableFields.FirstName]: new FormControl(this.user?.[UserTableFields.FirstName] || '', Validators.required),
      [UserTableFields.LastName]: new FormControl(this.user?.[UserTableFields.LastName] || '', Validators.required),
      [UserTableFields.Email]: new FormControl(this.user?.[UserTableFields.Email] || '', [
        Validators.required,
        Validators.email
      ]),
      [UserTableFields.Password]: new FormControl(this.user?.[UserTableFields.Password] || '', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')
      ]),
      [UserTableFields.RepeatPassword]: new FormControl('', [
        Validators.required,
        this.passwordMatchValidator.bind(this)
      ]),
      [UserTableFields.Type]: new FormControl(this.user?.[UserTableFields.Type] || '', Validators.required)
    });
  }

  private isUsernameExist(control: FormControl): { [s: string]: boolean } | null {
    if (this.usernames.includes(control.value) && control.value !== this.user?.username) {
      return { 'usernameExist': true };
    }
    return null;
  }

  private passwordMatchValidator(control: FormControl): { [s: string]: boolean } | null {
    if (control.value !== this.formData?.get(UserTableFields.Password)?.value) {
      return { 'passwordMismatch': true };
    }
    return null;
  }

  closeForm() {
    this.removeForm?.emit();
  }

  onSubmit() {
    if (this.formData?.valid) {
      if (this.user?.id) {
        this.usersService.editUser(new User({...this.user, ...this.formData.value}));
      } else {
        this.usersService.createUser(new User(this.formData.value));
      }

      this.notificationService.showNotification({
        message: this.user?.id ? 'User saved' : 'User added',
        type: NotificationTypes.Success
      });

      this.removeForm.emit();
    } else {
      this.notificationService.showNotification({
        message: "Form not valid",
        type: NotificationTypes.Error
      });
    }
  }
}
