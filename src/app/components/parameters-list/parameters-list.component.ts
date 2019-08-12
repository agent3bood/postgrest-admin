import {Component, Input, OnInit} from '@angular/core';
import {Parameter} from '../../services/postgrest.service';

@Component({
  selector: 'app-parameters-list',
  templateUrl: './parameters-list.component.html',
  styleUrls: ['./parameters-list.component.css']
})
export class ParametersListComponent implements OnInit {
  @Input() parameters: Parameter[];
  constructor() { }

  ngOnInit() {
  }

}
