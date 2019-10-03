import { BehaviorSubject } from 'rxjs'

export class ViewConfig {
  viewer = 'viewerr';
  view = 'view';
  records = 'records';
  summary = 'summary';
  graph = 'graph';
  constructor() {

  }
}

export class ViewState {
  config: BehaviorSubject<ViewConfig[]> = new BehaviorSubject([new ViewConfig()]);
  constructor() {}
}
