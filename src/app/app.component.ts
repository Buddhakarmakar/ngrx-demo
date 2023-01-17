import { Component, VERSION, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  decrement,
  increment,
  multiply,
  reset,
} from './Store/Actions/counter.action';
import * as fromRoot from './Store/selectors/counter.selector';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  count$: Observable<number>;
  constructor(private store: Store<fromRoot.AppState>) {}
  ngOnInit() {
    this.count$ = this.store.pipe(select(fromRoot.selectFeatureCount));
  }
  increment() {
    this.store.dispatch(increment());
  }
  decrement() {
    this.store.dispatch(decrement());
  }

  multiply() {
    this.store.dispatch(multiply({ multiplyBy: 10 }));
  }
  reset(){
    this.store.dispatch(reset())
  }
}
