import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { MainComponent } from './components/main/main.component';
import {AppRoutingModule} from "./app-routing.module";
import { NotificationComponent } from './components/notification/notification.component';
import {CommonModule} from "@angular/common";
import {NotificationService} from "./services/notification.service";
import { TableComponent } from './components/table/table.component';
import {UsersService} from "./services/users.service";
import { CreateEditUserComponent } from './components/create-edit-user/create-edit-user.component';
import { CustomInputComponent } from './components/custom-input/custom-input.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ErrorPageComponent,
    MainComponent,
    NotificationComponent,
    TableComponent,
    CreateEditUserComponent,
    CustomInputComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [
    NotificationService,
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
