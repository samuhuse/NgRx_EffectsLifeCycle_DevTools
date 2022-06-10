import { createAction, props } from '@ngrx/store';
import { Joke } from 'src/app/models/joke.model';

export const refreshJokes = createAction(
    '[JokesListComponent] refreshJokes',
    props<{ amount: number; }>()
);

export const refreshJoke = createAction(
    '[JokesListComponent] refreshJoke',
    props<{ oldJokeIndex: number }>()
);

export const replaceJokes = createAction(
    '[JokesListComponent] replaceJokes',
    props<{ jokes: Joke[] }>()
);

export const replaceJokeAt = createAction(
    '[JokesListComponent] replaceJokeAt',
    props<{ index: number; joke: Joke }>()
);

export const likeJoke = createAction(
    '[JokesListComponent] likeJoke',
    props<{ joke: Joke; }>()
);

export const dislikeJoke = createAction(
    '[JokesListComponent] dislikeJoke',
    props<{ joke: Joke; }>()
);

export const likedJoke = createAction(
    '[JokesListComponent] likedJoke',
    props<{ joke: Joke; }>()
);

export const dislikedJoke = createAction(
    '[JokesListComponent] dislikedJoke',
    props<{ joke: Joke; }>()
);

export const error = createAction(
    '[JokesListComponent] error',
    props<{ errorMessage: string; }>()
);