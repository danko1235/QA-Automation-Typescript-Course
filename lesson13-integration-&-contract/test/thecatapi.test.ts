import axios from 'axios';
import { expect } from '@jest/globals';
import { ImageResponse, VoteResponse, FavouriteResponse } from 'src/interfaces';

const API_KEY = process.env.API_KEY || 'live_IWoxb0V9gd0doG5WkzfZyAREgrKnnVJxucR2af7shI8hIH3eQ5mVoIfwLXkhDCm2';
const BASE_URL = 'https://api.thecatapi.com/v1';
const SUB_ID = 'test_user_123';

let imageId: string | null = null;
let voteId: string | null = null;
let favouriteId: string | null = null;

describe('TheCatAPI Integration Tests', () => {
    beforeAll(async () => {
        const response = await axios.get<ImageResponse[]>(`${BASE_URL}/images/search?limit=1`, {
            headers: { 'x-api-key': API_KEY }
        });
        if (response.data.length > 0) {
            imageId = response.data[0].id;
        }
    }, 10000);

    afterAll(async () => {
        if (favouriteId) await axios.delete(`${BASE_URL}/favourites/${favouriteId}`, { headers: { 'x-api-key': API_KEY } });
        if (voteId) await axios.delete(`${BASE_URL}/votes/${voteId}`, { headers: { 'x-api-key': API_KEY } });
    }, 10000);

    it('should create vote and favourite for image', async () => {
        if (!imageId) fail('Image not available');

        const voteResponse = await axios.post<VoteResponse>(
            `${BASE_URL}/votes`,
            { image_id: imageId, value: 1, sub_id: SUB_ID },
            { headers: { 'x-api-key': API_KEY } }
        );
        expect(voteResponse.status).toBe(201);
        voteId = voteResponse.data.id;

        const favouriteResponse = await axios.post<FavouriteResponse>(
            `${BASE_URL}/favourites`,
            { image_id: imageId, sub_id: SUB_ID },
            { headers: { 'x-api-key': API_KEY } }
        );
        expect(favouriteResponse.status).toBe(200);
        favouriteId = favouriteResponse.data.id;

        const [votes, favourites] = await Promise.all([
            axios.get(`${BASE_URL}/votes?sub_id=${SUB_ID}`, { headers: { 'x-api-key': API_KEY } }),
            axios.get(`${BASE_URL}/favourites?sub_id=${SUB_ID}`, { headers: { 'x-api-key': API_KEY } })
        ]);
        expect(votes.data.some((v: any) => v.id === voteId)).toBe(true);
        expect(favourites.data.some((f: any) => f.id === favouriteId)).toBe(true);
    }, 10000);
});
