import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JokeDto } from './DTOs/joke-dto';
import { map } from 'rxjs';
import { JokeMappings } from '../mappings/joke.mappings';
import { JokesDto } from './DTOs/jokes-dto';

@Injectable({
  providedIn: 'root'
})
export class JokesService {

  private baseEndpoint: string = 'https://v2.jokeapi.dev/joke';

  constructor(private httpClient: HttpClient) { }

  public getRandomJoke() {
    return this.httpClient.get<JokeDto>(this.baseEndpoint + `/Any?type=single`)
      .pipe(map(response => JokeMappings.mapFromJokeDto(response)))
  }

  public getRandomJokes(jokesAmount: number = 10) {
    return this.httpClient.get<JokesDto>(this.baseEndpoint + `/Any?type=single&amount=${jokesAmount}`)
      .pipe(map(response => response.jokes.map(joke => JokeMappings.mapFromJokeDto(joke))))
  }

}
