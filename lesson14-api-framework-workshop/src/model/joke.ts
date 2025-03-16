export interface Joke {
    id: number;
    type: string;
    setup: string;
    punchline: string;
}

export type JokeType = 'programming' | 'general';
