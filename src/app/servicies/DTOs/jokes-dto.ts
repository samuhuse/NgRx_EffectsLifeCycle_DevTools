import { JokeDto } from "./joke-dto";


export interface JokesDto {
    error: boolean;
    amount: number;
    jokes: JokeDto[];
}