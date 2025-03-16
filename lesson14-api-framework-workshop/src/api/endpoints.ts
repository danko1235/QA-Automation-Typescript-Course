export const Endpoints = {
    RANDOM_JOKE: '/jokes/random',
    TEN_JOKES: '/jokes/ten',
    RANDOM_NUMBER_JOKES: (count: number) => `/jokes/random/${count}`,
    PROGRAMMING_JOKES: '/jokes/programming/random',
    TEN_PROGRAMMING_JOKES: '/jokes/programming/ten',
    JOKE_TYPES: '/types',
    JOKE_BY_ID: (id: number) => `/jokes/${id}`
};
