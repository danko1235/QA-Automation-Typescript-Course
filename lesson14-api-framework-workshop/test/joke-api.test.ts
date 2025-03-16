import { JokeApiService } from '../src/api/joke-api-service';

describe('Joke API Tests', () => {
    const jokeApiService = new JokeApiService();

    // Test 1
    test('Should get a random joke with correct properties', async () => {
        const joke = await jokeApiService.getRandomJoke();

        expect(joke).toHaveProperty('id');
        expect(joke).toHaveProperty('type');
        expect(joke).toHaveProperty('setup');
        expect(joke).toHaveProperty('punchline');
    });

    // Test 2
    test('Should get exactly 10 jokes', async () => {
        const jokes = await jokeApiService.getTenJokes();

        expect(Array.isArray(jokes)).toBe(true);
        expect(jokes.length).toBe(10);
    });

    // Test 3
    test('Should get programming jokes with correct type', async () => {
        const jokes = await jokeApiService.getProgrammingJoke();

        expect(Array.isArray(jokes)).toBe(true);
        expect(jokes[0].type).toBe('programming');
    });

    // Test 4
    test('Should get available joke types including programming and general', async () => {
        const types = await jokeApiService.getJokeTypes();

        expect(Array.isArray(types)).toBe(true);
        expect(types).toContain('programming');
        expect(types).toContain('general');
    });

    // Test 5
    test('Should get jokes with unique IDs', async () => {
        const count = 45;
        const jokes = await jokeApiService.getRandomNumberOfJokes(count);

        expect(Array.isArray(jokes)).toBe(true);
        expect(jokes.length).toBe(count);

        const ids = jokes.map((joke) => joke.id);
        const uniqueIds = new Set(ids);
        expect(uniqueIds.size).toBe(ids.length);
    });
});
