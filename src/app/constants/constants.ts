import {UserAddFields, UserFormTypes, UserTableFields, UserTypes} from "../enums/enums";
import {UserFields, UserFormField, UserFormFields} from "../interfaces/user.interface";

export const userFields: UserFormFields = {
  [UserTableFields.UserName]: 'Username',
  [UserTableFields.FirstName]: 'First name',
  [UserTableFields.LastName]: 'Last name',
  [UserTableFields.Email]: 'Email',
  [UserTableFields.Type]: 'Type',
  [UserTableFields.Password]: 'Password',
  [UserTableFields.RepeatPassword]: 'Repeat password'
}

export const AddAndEditFormFields: UserFormField[] = [
  {
    field: UserTableFields.UserName,
    label: UserAddFields.UserName,
    type: UserFormTypes.Text
  },
  {
    field: UserTableFields.FirstName,
    label: UserAddFields.FirstName,
    type: UserFormTypes.Text
  },
  {
    field: UserTableFields.LastName,
    label: UserAddFields.LastName,
    type: UserFormTypes.Text
  },
  {
    field: UserTableFields.Email,
    label: UserAddFields.Email,
    type: UserFormTypes.Text
  },
  {
    field: UserTableFields.Type,
    label: UserAddFields.Type,
    type: UserFormTypes.Select,
    items: [UserTypes.Admin, UserTypes.Driver]
  },
  {
    field: UserTableFields.Password,
    label: UserAddFields.Password,
    type: UserFormTypes.Text
  },
  {
    field: UserTableFields.RepeatPassword,
    label: UserAddFields.RepeatPassword,
    type: UserFormTypes.Text
  },
];

export const tableFields: UserFields[] = [
  {
    label: userFields[UserTableFields.UserName],
    field: UserTableFields.UserName,
    size: 16
  },
  {
    label: userFields[UserTableFields.FirstName],
    field: UserTableFields.FirstName,
    size: 16
  },
  {
    label: userFields[UserTableFields.LastName],
    field: UserTableFields.LastName,
    size: 16
  },
  {
    label: userFields[UserTableFields.Email],
    field: UserTableFields.Email,
    size: 25
  },
  {
    label: userFields[UserTableFields.Type],
    field: UserTableFields.Type,
    size: 7
  },
];
