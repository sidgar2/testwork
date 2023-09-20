import {Component, OnDestroy, OnInit} from '@angular/core';
import {Notification} from "./interfaces/notification.interface";
import {NotificationService} from "./services/notification.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  public notification: Notification = {};
  private subscription: Subscription = new Subscription();

  constructor(private readonly notificationService: NotificationService) {
  }

  ngOnInit() {
    this.subscription
      .add(this.notificationService.notification
        .subscribe((newNotification: Notification) => {
          this.notification = newNotification;
        }));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  hideNotification() {
    this.notificationService.showNotification({});
  }
}
