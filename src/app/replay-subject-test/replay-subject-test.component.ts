import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-replay-subject-test',
  templateUrl: './replay-subject-test.component.html',
  styleUrls: ['./replay-subject-test.component.less']
})
export class ReplaySubjectTestComponent implements OnInit {

  rs: ReplaySubject<any> = new ReplaySubject(100);

  count: number = 0;

  constructor() { }

  ngOnInit() {
    this.subAll();
    this.rs.next(0);
  }

  s1() {
    this.rs.subscribe(res => {
      console.log(res, 's1');
    });
  }

  s2() {
    this.rs.subscribe(res => {
      console.log(res, 's2', this.rs.);
    });
  }

  sPipe() {
    this.rs.pipe(first()).subscribe(res => {
      console.log(res, 'first pipe');
    });
  }

  subAll() {
    this.s1();
    this.s2();
    this.sPipe();
  }

  addToRS() {
    this.count++;
    this.rs.next(this.count);
  }

}
