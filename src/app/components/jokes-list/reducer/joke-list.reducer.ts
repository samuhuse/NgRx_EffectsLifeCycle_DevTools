import { Action, createReducer, on } from '@ngrx/store';
import { Joke } from 'src/app/models/joke.model';

import * as lodash from "lodash";

import * as jokeListActions from './../actions/jokes-list.actions';

const initialState: Joke[] = [];

export const jokeListReducer = createReducer<Joke[], Action>(
    initialState,
    on(jokeListActions.replaceJokes, (state, { jokes }) =>
        jokes
    ),
    on(jokeListActions.replaceJokeAt, (state, { joke, index }) => {
        let newState = [...state]
        newState[index] = joke;
        return newState;
    }),

    on(jokeListActions.likedJoke, (state, { joke }) => {
        console.log('handling likedJoke')
        let newState = [...state] as Joke[]
        let likedJoke = lodash.cloneDeep(newState.find(j => j.id == joke.id)!)
        if (likedJoke) {
            likedJoke!.isLiked = true;
            newState[state.indexOf(joke)] = likedJoke;
        }

        return newState;
    }),

    on(jokeListActions.dislikedJoke, (state, { joke }) => {
        console.log('handling dislikedJoke')
        let newState = [...state] as Joke[]
        let dislikedJoke = lodash.cloneDeep(newState.find(j => j.id == joke.id)!)
        if (dislikedJoke) {
            dislikedJoke!.isDisliked = true;
            newState[state.indexOf(joke)] = dislikedJoke;
        }

        return newState;
    }),

    on(jokeListActions.error, (state, { errorMessage }) => {
        console.log('handling error: ', errorMessage)
        let newState = [...state] as Joke[]

        return newState;
    })
);