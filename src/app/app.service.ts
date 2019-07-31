import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Path, PostgrestService} from './services/postgrest.service';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  dbs: PostgrestService[] = [];
  selectedDb: PostgrestService = null;
  selectedPath: Path = null;
  constructor(private http: HttpClient) { }
  addDb(url: string, auth?: string) {
    const db = new PostgrestService(url, auth, this.http);
    this.dbs.push(db);
    this.selectedDb = this.dbs[this.dbs.length - 1];
  }
}
