import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {PostgrestService} from './services/postgrest.service';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  dbs: any[] = [];
  constructor(private http: HttpClient) { }
  addDb(url: string, auth?: string) {
    this.http.get(url)
      .subscribe((data: any) => {
        const db = new PostgrestService(data);
        this.dbs.push(db);
      });
  }
}
