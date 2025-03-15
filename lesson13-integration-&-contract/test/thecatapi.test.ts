import axios, { AxiosError } from 'axios';
import { expect } from '@jest/globals';
import { ImageResponse, VoteResponse, FavouriteResponse } from 'src/interfaces';

const API_KEY = process.env.API_KEY || 'live_IWoxb0V9gd0doG5WkzfZyAREgrKnnVJxucR2af7shI8hIH3eQ5mVoIfwLXkhDCm2';
const BASE_URL = 'https://api.thecatapi.com/v1';
const SUB_ID = 'test_user_123';

describe('TheCatAPI Integration Tests', () => {
    let imageId: string | null = null;
    let voteId: string | null = null;
    let favouriteId: string | null = null;

    beforeAll(async () => {
        try {
            const response = await axios.get<ImageResponse[]>(`${BASE_URL}/images/search?limit=1`, {
                headers: {
                    'x-api-key': API_KEY
                }
            });

            if (response.data && response.data.length > 0) {
                imageId = response.data[0].id;
                console.log(`Using image ID: ${imageId}`);
            } else {
                throw new Error('No images found');
            }
        } catch (e) {
            console.error('Image fetch failed:', (e as AxiosError).response?.data || (e as Error).message);
            throw e;
        }
    }, 10000);

    afterAll(async () => {
        const cleanup = async (url: string): Promise<void> => {
            try {
                await axios.delete(url, {
                    headers: { 'x-api-key': API_KEY }
                });
            } catch (e) {
                console.warn(`Cleanup failed for ${url}:`, (e as AxiosError).message);
            }
        };

        if (favouriteId) await cleanup(`${BASE_URL}/favourites/${favouriteId}`);
        if (voteId) await cleanup(`${BASE_URL}/votes/${voteId}`);
    }, 10000);

    it('should create vote and favourite for image', async () => {
        if (!imageId) {
            fail('Image not available');
            return;
        }

        try {
            const voteResponse = await axios.post<VoteResponse>(
                `${BASE_URL}/votes`,
                {
                    image_id: imageId,
                    value: 1,
                    sub_id: SUB_ID
                },
                { headers: { 'x-api-key': API_KEY } }
            );
            expect(voteResponse.status).toBe(201);
            voteId = voteResponse.data.id;
            console.log(`Created vote with ID: ${voteId}`);
        } catch (e) {
            console.error('Vote creation failed:', (e as AxiosError).response?.data || (e as Error).message);
            throw e;
        }

        try {
            const favouriteResponse = await axios.post<FavouriteResponse>(
                `${BASE_URL}/favourites`,
                {
                    image_id: imageId,
                    sub_id: SUB_ID
                },
                { headers: { 'x-api-key': API_KEY } }
            );
            expect(favouriteResponse.status).toBe(200);
            favouriteId = favouriteResponse.data.id;
            console.log(`Created favourite with ID: ${favouriteId}`);
        } catch (e) {
            console.error('Favourite creation failed:', (e as AxiosError).response?.data || (e as Error).message);
            throw e;
        }

        try {
            const [votes, favourites] = await Promise.all([
                axios.get(`${BASE_URL}/votes?sub_id=${SUB_ID}`, { headers: { 'x-api-key': API_KEY } }),
                axios.get(`${BASE_URL}/favourites?sub_id=${SUB_ID}`, { headers: { 'x-api-key': API_KEY } })
            ]);

            expect(votes.data.some((v: any) => v.id === voteId)).toBe(true);
            expect(favourites.data.some((f: any) => f.id === favouriteId)).toBe(true);
        } catch (e) {
            console.error('Verification failed:', (e as AxiosError).response?.data || (e as Error).message);
            throw e;
        }
    }, 10000);
});
