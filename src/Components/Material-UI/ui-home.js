import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

const BoxHeader = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingIinline: '3rem',
    paddingBlock: '1rem',
    boxShadow: '0 0 3em hsl(var(--clr - black) / 0.5)',
    // width: '300px',
    // fontSize: 20,
    // lineHeight: 2,
    // padding: 10,
    // backgroundColor: '#13813a',
    // position: 'relative',
    // fontFamily: [
    //     '-apple-system',
    //     'Raleway SemiBold',
    //     '"Segoe UI"',
    //     'Roboto',
    //     '"Helvetica Neue"',
    //     'Arial',
    //     'sans-serif',
    //     '"Apple Color Emoji"',
    //     '"Segoe UI Emoji"',
    //     '"Segoe UI Symbol"',
    // ].join(','),
    // '&:hover': {
    //     background: '#fff',
    //     color: '#444',
    // },
});

export { BoxHeader };