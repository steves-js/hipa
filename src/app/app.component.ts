import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'hipa';

  ngOnInit() {
    Notification.requestPermission();
  }

  testNotification() {
    if (Notification.permission === 'granted') {
      const notification = new Notification('Hi there!');
    } else if (Notification.permission !== 'denied') {
      Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
          const notification = new Notification('Thank you for enabling me');
        }
      });
    }
   }
}
