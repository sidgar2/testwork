import { Component } from '@angular/core';
import {User} from "../../interfaces/user.interface";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent {
  public user: User | null = null;

  openForm() {
    this.user = {};
  }

  removeForm() {
    this.user = null;
  }

  setUserToEdit(user: User) {
    this.user = user;
  }
}
