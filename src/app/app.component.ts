import { Component } from '@angular/core';
import { AppService } from './app.service';
import {Path, PostgrestService} from './services/postgrest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private appService: AppService) { }
  title = 'postgrest-admin';

  addDb(form) {
    this.appService.addDb(form.form.value.url.replace(/\/$/, ''), form.form.value.auth);
  }
  // selectPath(path: Path) {
  //   this.appService.selectedPath = path;
  // }
  getSelectedPathData() {
    this.appService.selectedPath.get.do();
    //   .subscribe((responseData: any) => {
    //     this.appService.selectedPath.get.data = responseData;
    // });
  }
  onSelectDb(db: PostgrestService) {
    this.appService.selectedDb = db;
    this.appService.selectedPath = null;
  }
  onSelectPath(path: Path) {
    this.appService.selectedPath = path;
    this.appService.selectedPath.get.do();
  }
}
