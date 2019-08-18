import {Component, Input, OnInit} from '@angular/core';
import {Parameter} from '../../services/postgrest.service';

@Component({
  selector: 'app-parameters-list',
  templateUrl: './parameters-list.component.html',
  styleUrls: ['./parameters-list.component.css']
})
export class ParametersListComponent implements OnInit {
  @Input() parameters: Parameter[];
  queryParameters: Parameter[] = [];
  headerParameters: Parameter[] = [];
  constructor() { }

  ngOnInit() {
    if (this.parameters && this.parameters.length) {
      this.parameters.map(i => {
        if (i.in === 'query') {
          this.queryParameters.push(i);
        } else if (i.in === 'header') {
          this.headerParameters.push(i);
        }
      });
    }
  }

}
