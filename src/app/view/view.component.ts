import { Component, OnInit, Input } from '@angular/core';
import { ViewState } from '../state';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.less']
})
export class ViewComponent implements OnInit {

  @Input() state: ViewState;

  constructor() { }

  ngOnInit() {
  }

}
