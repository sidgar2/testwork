import {BehaviorSubject} from "rxjs";
import {Notification} from "../interfaces/notification.interface";

export class NotificationService {
  public notification: BehaviorSubject<Notification> = new BehaviorSubject({});
  private notificationTimeout: number = 0;

  public showNotification(notification: Notification): void {
    clearTimeout(this.notificationTimeout);
    this.notification.next(notification);

    this.notificationTimeout = setTimeout(() => {
      this.notification.next({});
    }, 10000);
  }
}
