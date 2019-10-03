import { Component, OnInit } from '@angular/core';
import { ViewState, ViewConfig } from '../state';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.less']
})
export class ViewerComponent implements OnInit {

  state: ViewState;

  configs: ViewConfig[];

  constructor() { }

  ngOnInit() {
    this.state = new ViewState();
    this.state.config.subscribe(configs => {
      console.log('parent viewer subscription', configs);
      this.configs = configs;
    });
  }

}
