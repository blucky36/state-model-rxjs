import { Component, OnInit, Input } from '@angular/core';
import { ViewState } from '../state';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.less']
})
export class GraphComponent implements OnInit {

  @Input() state: ViewState;

  constructor() { }

  ngOnInit() {
  }

}
