import { Component, OnInit, Input } from '@angular/core';
import {Path} from '../../services/postgrest.service';

@Component({
  selector: 'app-paths-list-item',
  templateUrl: './paths-list-item.component.html',
  styleUrls: ['./paths-list-item.component.css']
})
export class PathsListItemComponent implements OnInit {
  @Input() path: Path;
  constructor() { }

  ngOnInit() {
  }

}
