import { render, screen } from '@testing-library/react';
import Search from '../Components/Seacrh/search';
import { Provider } from 'react-redux';
import store from '../Store/store';

test('should show searchbar', () => {
    render(
        <Provider store={store}>
            <Search />
        </Provider>);
    expect(screen.getByTestId('search-bar-form')).toBeInTheDocument()
})
