import { Component, OnInit, Input } from '@angular/core';
import { ViewState } from '../state';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.less']
})
export class RecordsComponent implements OnInit {

  @Input() state: ViewState;

  constructor() { }

  ngOnInit() {
  }

}
