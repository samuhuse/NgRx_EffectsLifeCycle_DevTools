import { Component, OnInit } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/app-state';
import { Joke } from 'src/app/models/joke.model';

import * as jokeListActions from './actions/jokes-list.actions';

@Component({
  selector: 'app-jokes-list',
  templateUrl: './jokes-list.component.html',
  styleUrls: ['./jokes-list.component.css']
})
export class JokesListComponent implements OnInit {

  public jokes$: Observable<Joke[]> = this.store.select(state => state.jokes);

  constructor(private store: Store<AppState>, private actions: Actions) {
    this.actions.pipe(
      ofType(jokeListActions.error)
    ).subscribe(err => alert(err.errorMessage))
  }

  ngOnInit(): void {
  }

  public refreshAllJokesClicked() {
    this.store.dispatch(jokeListActions.refreshJokes({ amount: 5 }))
  }

  public refreshJoke(jokeIndex: number) {
    this.store.dispatch(jokeListActions.refreshJoke({ oldJokeIndex: jokeIndex }))
  }

  public likeJoke(joke: Joke) {
    this.store.dispatch(jokeListActions.likeJoke({ joke: joke }))
  }

  public dislikeJoke(joke: Joke) {
    this.store.dispatch(jokeListActions.dislikeJoke({ joke: joke }))
  }

}
