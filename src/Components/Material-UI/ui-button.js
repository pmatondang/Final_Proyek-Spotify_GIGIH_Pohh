import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const LoginButton = styled(Button)({
    width: '300px',
    fontSize: 20,
    lineHeight: 2,
    padding: 10,
    backgroundColor: '#13813a',
    position: 'relative',
    fontFamily: [
        '-apple-system',
        'Raleway SemiBold',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
        background: '#fff',
        color: '#444',
    },
});

const SearchButton = styled(Button)({
    width: '100px',
    height: '58px',
    fontSize: 16,
    lineHeight: 2,
    backgroundColor: 'green',
    position: 'relative',
    fontFamily: [
        '-apple-system',
        'Raleway SemiBold',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
        background: '#fff',
        color: '#444',
    },
});

const ButtonSelect = styled(Button)({
    width: '100px',
    textTransform: 'none',
    fontSize: 16,
    lineHeight: 2,
    backgroundColor: '#0BDA51',
    color: 'black',
    fontFamily: [
        '-apple-system',
        'Raleway SemiBold',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
        background: '#fff',
        color: '#444',
    },
});


export { LoginButton, SearchButton, ButtonSelect }