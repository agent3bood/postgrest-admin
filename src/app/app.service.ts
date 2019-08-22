import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Path, PostgrestService } from './services/postgrest.service';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  dbs: PostgrestService[] = [];
  selectedDb: PostgrestService = null;
  selectedPath: Path = null;

  constructor(private http: HttpClient) {}

  addDb(url: string, auth?: string) {
    let index = -1;
    // find url in this.dbs
    this.dbs.map((item, idx) => {
      if (item.url === url) {
        index = idx;
      }
    });
    if (index > -1) {
      this.selectedDb = this.dbs[index];
    } else {
      const db = new PostgrestService(url, auth, this.http);
      this.dbs.push(db);
      this.selectedDb = db;
    }
  }
}
