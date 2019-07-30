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
  ngOnInit() {
    this.appService.addDb('http://192.168.99.100:3000/');
  }
}
