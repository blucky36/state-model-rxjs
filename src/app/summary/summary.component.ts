import { Component, OnInit, Input } from '@angular/core';
import { ViewState, ViewConfig } from '../state';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.less']
})
export class SummaryComponent implements OnInit {

  @Input() state: ViewState;

  configs: ViewConfig[];

  constructor() { }

  ngOnInit() {
    this.state.config.subscribe(configs => {
      console.log('top table in summary emission', configs);
      this.configs = configs;
    });
  }

}
