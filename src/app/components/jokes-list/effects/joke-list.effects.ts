import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType, OnInitEffects } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { catchError, exhaustMap, map, mergeMap, of, switchMap } from "rxjs";
import { BuggyJokeJudgementService } from "src/app/servicies/buggy-joke-judgement.service";
import { JokesService } from "src/app/servicies/jokes.service";

import * as jokeListActions from './../actions/jokes-list.actions';

@Injectable()
export class JokeListEffects implements OnInitEffects {


    loadJokes$ = createEffect(() => this.actions$.pipe(
        ofType(jokeListActions.refreshJokes),
        exhaustMap(action =>
            this.jokesService.getRandomJokes(action.amount).pipe(
                map(jokes => jokeListActions.replaceJokes({ jokes: jokes }))
            )
        )
    ));

    loadJoke$ = createEffect(() => this.actions$.pipe(
        ofType(jokeListActions.refreshJoke),
        exhaustMap(action =>
            this.jokesService.getRandomJoke().pipe(
                map(joke => jokeListActions.replaceJokeAt({ joke: joke, index: action.oldJokeIndex }))
            )
        )
    ));

    likeJoke$ = createEffect(() => this.actions$.pipe(
        ofType(jokeListActions.likeJoke),
        exhaustMap(action =>
            this.buggyJokeJudgementService.likeJoke(action.joke.id)
                .pipe(
                    map(_ => jokeListActions.likedJoke({ joke: action.joke })),
                    catchError(error => of(jokeListActions.error({ errorMessage: error })))
                )
        )
    ),
        { useEffectsErrorHandler: false }
    );

    dislikeJoke$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(jokeListActions.dislikeJoke),
                exhaustMap(action =>
                    this.buggyJokeJudgementService.dislikeJoke(action.joke.id)
                        .pipe(
                            map(_ => jokeListActions.dislikedJoke({ joke: action.joke })),
                            catchError(error => of(jokeListActions.error({ errorMessage: error })))
                        )
                )
                // Errors are handled and it is safe to disable resubscription
            ),
        { useEffectsErrorHandler: false }
    );

    constructor(
        private actions$: Actions,
        private jokesService: JokesService,
        private buggyJokeJudgementService: BuggyJokeJudgementService
    ) { }


    ngrxOnInitEffects(): Action {
        console.log('init')
        return jokeListActions.refreshJokes({ amount: 5 })
    }
}