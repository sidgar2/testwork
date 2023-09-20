import {UserAddFields, UserFormTypes, UserTableFields, UserTypes} from "../enums/enums";

export class User {
  password?: string;
  id?: number;
  username?: string;
  firstname?: string;
  lastname?: string;
  email?: string;
  type?: UserTypes;

  constructor(source: any) {
    this.password = source.password;
    this.id = source.id || Math.random();
    this.username = source.username;
    this.firstname = source.firstname;
    this.lastname = source.lastname;
    this.email = source.email;
    this.type = source.type;
  }
}

export interface TableFields {
  [UserTableFields.UserName]: string,
  [UserTableFields.FirstName]: string,
  [UserTableFields.LastName]: string,
  [UserTableFields.Email]: string,
  [UserTableFields.Type]: string,
}

export interface UserFormFields extends TableFields {
  [UserTableFields.Password]?: string,
  [UserTableFields.RepeatPassword]?: string,
}

export interface UserFormField {
  field: string;
  type: UserFormTypes;
  label: UserAddFields;
  items?: UserTypes[];
}

export interface UserFields {
  label: string,
  field: keyof User,
  size: number
}
