import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BuggyJokeJudgementService {

  public likeJoke(jokeId: number): Observable<any> {
    console.log('call Like Joke')

    if (Math.floor(Math.random() * 5) != 2) return of(undefined)
    else return throwError(() => new Error(`Could not like JokeId ${jokeId}`))
  }

  public dislikeJoke(jokeId: number): Observable<any> {
    console.log('call Dislike Joke')

    if (Math.floor(Math.random() * 4) != 2) { console.log('success'); return of(undefined) }
    else { console.log('insuccess'); return throwError(() => new Error(`Could not dislike JokeId ${jokeId}`)) }
  }

  constructor() { }
}
