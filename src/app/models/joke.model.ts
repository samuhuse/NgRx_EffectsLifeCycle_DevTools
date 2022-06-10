export class Joke {
    religious: boolean = false;
    political: boolean = false;
    racist: boolean = false;
    sexist: boolean = false;
    explicit: boolean = false;

    type: string = '';
    joke: string = '';

    id: number = 0;

    isLiked: boolean = false;
    isDisliked: boolean = false;

    constructor() {
    }
}