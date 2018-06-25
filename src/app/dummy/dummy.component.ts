import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store} from '@ngrx/store';

interface AppState {
  count: number;
}

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.css']
})
export class DummyComponent implements OnInit {
  count$: Observable<number>;
  constructor(private store: Store<AppState>) {
    this.count$ = this.store.pipe(select('nome_store_pippo'));
  }

  ngOnInit() {
  }

}
