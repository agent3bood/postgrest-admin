import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Path} from '../../services/postgrest.service';

@Component({
  selector: 'app-paths-list',
  templateUrl: './paths-list.component.html',
  styleUrls: ['./paths-list.component.css']
})
export class PathsListComponent implements OnInit {
  @Input() paths: Path[];
  @Input() selectedPath: Path;
  @Output() selectPath = new EventEmitter<Path>();
  constructor() { }

  ngOnInit() { }

  onSelectPath(path: Path) {
    this.selectPath.emit(path);
  }

}
