import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {DECREMENT, INCREMENT, RESET} from './counter';

interface AppState {
  count: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  // NOTE: dichiarazione dell'observale
  count$: Observable<number>;

  constructor(private store: Store<AppState>) {
    // this.count$ = this.appState.pipe(select('count'));
    this.count$ = this.store.pipe(select('nome_store_pippo'));
  }

  ngOnInit() {
    this.count$.subscribe(value => {
      console.log(value);
    }, error => {
      console.error(error);
    }, () => {
      console.log('complete');
    });
  }

  increment() {
    this.store.dispatch({type: INCREMENT});
  }

  decrement() {
    this.store.dispatch({ type: DECREMENT});
  }

  reset() {
    this.store.dispatch({ type: RESET});
  }
}
