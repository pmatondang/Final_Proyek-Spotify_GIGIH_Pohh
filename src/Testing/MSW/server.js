import { setupServer, SetupServer } from 'msw/node';
import { mockApi } from './mock-api';

export const server = setupServer(...mockApi)