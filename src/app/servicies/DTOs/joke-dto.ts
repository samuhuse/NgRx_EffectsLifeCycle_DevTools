
export interface FlagsDto {
    nsfw: boolean;
    religious: boolean;
    political: boolean;
    racist: boolean;
    sexist: boolean;
    explicit: boolean;
}

export interface JokeDto {
    error: boolean;
    category: string;
    type: string;
    joke: string;
    flags: FlagsDto;
    id: number;
    safe: boolean;
    lang: string;
}


