import { Pact, Verifier } from '@pact-foundation/pact';
import axios from 'axios';
import path from 'path';

const provider = new Pact({
    consumer: 'PetstoreConsumer',
    provider: 'PetstoreAPI',
    port: 1234
});

const expBody = {
    id: 1,
    category: {
        id: 1,
        name: 'string'
    },
    name: 'doggie',
    photoUrls: ['string'],
    tags: [
        {
            id: 1,
            name: 'string'
        }
    ],
    status: 'available'
};

describe('Contract Tests for Petstore API', () => {
    beforeAll(async () => {
        await provider.setup();
    });

    afterAll(async () => {
        await provider.finalize();
    });

    it('should fetch a pet by ID', async () => {
        await provider.addInteraction({
            state: 'A pet with ID exists',
            uponReceiving: 'a request for a pet by ID',
            withRequest: {
                method: 'GET',
                path: '/pet/1'
            },
            willRespondWith: {
                status: 200,
                body: expBody
            }
        });

        const response = await axios.get('http://localhost:1234/pet/1');
        expect(response.status).toBe(200);
        expect(response.data).toEqual(expBody);
    });

    it('should verify provider', async () => {
        const opts = {
            providerBaseUrl: 'http://localhost:1234',
            pactUrls: [path.resolve(__dirname, '../pacts/PetStoreClient-PetStoreAPI.json')]
        };
        const result = await new Verifier(opts).verifyProvider();
        expect(result).toBeTruthy();
    });
});
