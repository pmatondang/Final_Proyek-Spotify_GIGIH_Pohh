import { response, rest } from 'msw';

export const mockApi = [
    rest.get(`${process.env.REACT_APP_SPOTIFY_CLIENT_ID}`, (req, res, context) => {
        return response(
            context.status(200),
            context.json([
                { username: 'Poibe' },
                { username: 'Leny' }
            ])
            // try error
            // context.json([{ 
            //     account: username: 'Leny' }, { username: 'Naomi' }
            // ])
        )
    })
]