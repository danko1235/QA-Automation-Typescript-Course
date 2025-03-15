import { Pact } from '@pact-foundation/pact';
import axios from 'axios';

const provider = new Pact({
    consumer: 'PetstoreConsumer',
    provider: 'PetstoreAPI',
    port: 1234
});

describe('Contract Tests for Petstore API', () => {
    beforeAll(() => provider.setup());
    afterAll(() => provider.finalize());

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
                body: {
                    id: 1,
                    name: 'Fluffy',
                    status: 'available'
                }
            }
        });

        const response = await axios.get('http://localhost:1234/pet/1');
        expect(response.status).toBe(200);
        expect(response.data.name).toBe('Fluffy');
    });
});
