import { Component, OnInit, Input } from '@angular/core';
import {Operator, Parameter} from '../../services/postgrest.service';

@Component({
  selector: 'app-parameters-list-item',
  templateUrl: './parameters-list-item.component.html',
  styleUrls: ['./parameters-list-item.component.css']
})
export class ParametersListItemComponent implements OnInit {
  @Input() parameter: Parameter;
  operators: Operator[] = [
    {
      abbreviation: 'eq',
      meaning: 'equals'
    },
    {
      abbreviation: 'gt',
      meaning: 'greater than'
    },
    {
      abbreviation: 'gte',
      meaning: 'greater than or equal'
    },
    {
      abbreviation: 'lt',
      meaning: 'less than'
    },
    {
      abbreviation: 'lte',
      meaning: 'less than or equal'
    },
    {
      abbreviation: 'neq',
      meaning: 'not equal'
    },
    {
      abbreviation: 'like',
      meaning: 'LIKE operator (use * in place of %)'
    },
    {
      abbreviation: 'ilike',
      meaning: 'ILIKE operator (use * in place of %)'
    },
    {
      abbreviation: 'in',
      meaning: 'one of a list of values e.g. ?a=in.(1,2,3) – also supports commas in quoted strings like ?a=in.("hi,there","yes,you")'
    },
    {
      abbreviation: 'is',
      meaning: 'checking for exact equality (null,true,false)'
    },
    {
      abbreviation: 'fts',
      meaning: 'Full-Text Search using to_tsquery'
    },
    {
      abbreviation: 'plfts',
      meaning: 'Full-Text Search using plainto_tsquery'
    },
    {
      abbreviation: 'phfts',
      meaning: 'Full-Text Search using phraseto_tsquery'
    },
    {
      abbreviation: 'cs',
      meaning: 'contains e.g. ?tags=cs.{example, new}'
    },
    {
      abbreviation: 'cd',
      meaning: 'contained in e.g. ?values=cd.{1,2,3}'
    },
    {
      abbreviation: 'ov',
      meaning: 'overlap (have points in common), e.g. ?period=ov.[2017-01-01,2017-06-30]'
    },
    {
      abbreviation: 'sl',
      meaning: 'strictly left of, e.g. ?range=sl.(1,10)'
    },
    {
      abbreviation: 'sr',
      meaning: 'strictly right of'
    },
    {
      abbreviation: 'nxr',
      meaning: 'does not extend to the right of, e.g. ?range=nxr.(1,10)'
    },
    {
      abbreviation: 'nxl',
      meaning: 'does not extend to the left of'
    },
    {
      abbreviation: 'adj',
      meaning: 'is adjacent to, e.g. ?range=adj.(1,10)'
    }
    // ,
    // {
    //   abbreviation: 'not',
    //   meaning: ''
    // }
  ];
  constructor() { }

  ngOnInit() {
    if (!this.parameter.operator) {
      this.parameter.operator = this.operators[0];
    }
  }

  changeOperator(index) {
    this.parameter.operator = this.operators[index];
  }
  changeParameterEnum(index) {
    this.parameter.value = this.parameter.enum[index];
  }

}
