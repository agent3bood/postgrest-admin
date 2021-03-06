import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PostgrestService } from '../../services/postgrest.service';

@Component({
  selector: 'app-dbs-list',
  templateUrl: './dbs-list.component.html',
  styleUrls: ['./dbs-list.component.css']
})

export class DbsListComponent implements OnInit {
  @Input() dbs: PostgrestService[];
  @Output() selectDb = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onSelectDb(index: number) {
    this.selectDb.emit(index);
  }

}
