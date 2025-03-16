import { BaseApiService } from './base-api-service';
import { Endpoints } from './endpoints';
import { Joke, JokeType } from '../model/joke';

export class JokeApiService extends BaseApiService {
    public constructor(baseUrl?: string) {
        super(baseUrl);
    }

    public async getRandomJoke(): Promise<Joke> {
        return this.get<Joke>(Endpoints.RANDOM_JOKE);
    }

    public async getTenJokes(): Promise<Joke[]> {
        return this.get<Joke[]>(Endpoints.TEN_JOKES);
    }

    public async getRandomNumberOfJokes(count: number): Promise<Joke[]> {
        return this.get<Joke[]>(Endpoints.RANDOM_NUMBER_JOKES(count));
    }

    public async getProgrammingJoke(): Promise<Joke[]> {
        return this.get<Joke[]>(Endpoints.PROGRAMMING_JOKES);
    }

    public async getTenProgrammingJokes(): Promise<Joke[]> {
        return this.get<Joke[]>(Endpoints.TEN_PROGRAMMING_JOKES);
    }

    public async getJokeTypes(): Promise<JokeType[]> {
        return this.get<JokeType[]>(Endpoints.JOKE_TYPES);
    }

    public async getJokeById(id: number): Promise<Joke> {
        return this.get<Joke>(Endpoints.JOKE_BY_ID(id));
    }

    public async getInvalidUrl(): Promise<unknown> {
        return this.get<unknown>('/invalid-url');
    }
}
