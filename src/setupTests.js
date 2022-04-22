import '@testing-library/jest-dom';
import { server } from 'Testing/MSW/server';

beforeAll(() => server.listen({
    onUnhandledRequest: 'error'
}))
afterEach(() => server.resetHandlers())
afterAll(() => server.close())