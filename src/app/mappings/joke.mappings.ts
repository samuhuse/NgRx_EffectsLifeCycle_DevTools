import { Joke } from "../models/joke.model";
import { JokeDto } from "../servicies/DTOs/joke-dto";

export class JokeMappings {
    public static mapFromJokeDto(source: JokeDto): Joke {
        return {
            religious: source.flags.religious,
            political: source.flags.political,
            racist: source.flags.racist,
            sexist: source.flags.sexist,
            explicit: source.flags.explicit,

            type: source.type,
            joke: source.joke,

            id: source.id,

            isLiked: false,
            isDisliked: false
        }
    }
}