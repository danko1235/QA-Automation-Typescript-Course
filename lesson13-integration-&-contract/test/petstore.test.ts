import axios from 'axios';
import { expect } from '@jest/globals';

describe('Pet Store Contract Tests', () => {
    const baseUrl = 'https://petstore.swagger.io/v2';

    it('should get pet data with id 1 and verify the contract', async () => {
        const response = await axios.get(`${baseUrl}/pet/1`);

        expect(response.status).toBe(200);

        const data = response.data;

        expect(data).toHaveProperty('id');
        expect(data).toHaveProperty('category');
        expect(data).toHaveProperty('name');
        expect(data).toHaveProperty('photoUrls');
        expect(data).toHaveProperty('tags');
        expect(data).toHaveProperty('status');

        expect(typeof data.id).toBe('number');
        expect(typeof data.name).toBe('string');
        expect(typeof data.category).toBe('object');
        expect(Array.isArray(data.photoUrls)).toBe(true);
        expect(Array.isArray(data.tags)).toBe(true);
        expect(['available', 'pending', 'sold']).toContain(data.status);

        if (data.category) {
            expect(data.category).toHaveProperty('id');
            expect(data.category).toHaveProperty('name');
        }

        if (data.tags && data.tags.length > 0) {
            expect(data.tags[0]).toHaveProperty('id');
            expect(data.tags[0]).toHaveProperty('name');
        }
    });

    it('should return 404 for a non-existent pet', async () => {
        try {
            await axios.get(`${baseUrl}/pet/999999`);
        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                expect(error.response?.status).toBe(404);

                const data = error.response?.data;
                expect(typeof data.message).toBe('string');
            }
            if (axios.isAxiosError(error) && error.response) {
                expect(error.response.status).toBe(404);

                const data = error.response.data;
                expect(typeof data.message).toBe('string');
            }
        }
    });
});
