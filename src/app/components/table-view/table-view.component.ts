import {Component, Input, OnInit} from '@angular/core';
import {Path} from '../../services/postgrest.service';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.css']
})
export class TableViewComponent implements OnInit {
  @Input() path: Path;
  constructor() { }

  ngOnInit() {
  }

}
