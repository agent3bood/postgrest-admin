import { Component, OnInit, Input } from '@angular/core';
import { PostgrestService } from '../../services/postgrest.service';

@Component({
  selector: 'app-dbs-list-item',
  templateUrl: './dbs-list-item.component.html',
  styleUrls: ['./dbs-list-item.component.css']
})
export class DbsListItemComponent implements OnInit {
  @Input() db: PostgrestService;
  constructor() {}

  ngOnInit() {}
}
