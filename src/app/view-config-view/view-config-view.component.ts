import { Component, OnInit, Input } from '@angular/core';
import { ViewState, ViewConfig } from '../state';

@Component({
  selector: 'app-view-config-view',
  templateUrl: './view-config-view.component.html',
  styleUrls: ['./view-config-view.component.less']
})
export class ViewConfigViewComponent implements OnInit {

  @Input() where: string;

  @Input() state: ViewState;

  configs: ViewConfig[];

  constructor() { }

  ngOnInit() {
    this.state.config.subscribe((configArr: ViewConfig[]) => {
      console.log('subscription emission', this.where, configArr);
      this.configs = configArr;
    });
  }

  update(s: string) {
    console.log(s)
    let newConfig = { ...this.configs[0] };
    newConfig[this.where] = s;
    this.state.config.next([newConfig]);
  }

}
