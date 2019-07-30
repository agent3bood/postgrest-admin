import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private appService: AppService) { }
  title = 'postgrest-admin';

  addDb(form) {
    this.appService.addDb(form.form.value.url, form.form.value.auth);
  }
}
