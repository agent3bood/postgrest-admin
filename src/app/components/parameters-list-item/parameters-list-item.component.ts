import { Component, OnInit, Input } from '@angular/core';
import {Parameter} from '../../services/postgrest.service';

@Component({
  selector: 'app-parameters-list-item',
  templateUrl: './parameters-list-item.component.html',
  styleUrls: ['./parameters-list-item.component.css']
})
export class ParametersListItemComponent implements OnInit {
  @Input() parameter: Parameter;
  constructor() { }

  ngOnInit() {
  }

}
