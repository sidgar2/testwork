import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Notification} from "../../interfaces/notification.interface";

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent {
  @Input() notification: Notification = {};
  @Output() hideNotification: EventEmitter<void> = new EventEmitter<void>();

  public clickToNotification(): void {
    this.hideNotification.emit();
  }
}
