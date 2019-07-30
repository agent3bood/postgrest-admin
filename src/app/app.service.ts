import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {PostgrestService} from './services/postgrest.service';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  dbs: PostgrestService[] = [];
  selectedDb: PostgrestService = null;
  constructor(private http: HttpClient) { }
  addDb(url: string, auth?: string) {
    this.http.get(url)
      .subscribe((data: any) => {
        const db = new PostgrestService(url, auth, data);
        this.dbs.push(db);
        this.selectedDb = this.dbs[this.dbs.length - 1];
      });
  }
}
