import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

const BoxHeader = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingIinline: '3rem',
    paddingBlock: '1rem',
    boxShadow: '0 0 3em hsl(var(--clr - black) / 0.5)',
});

export { BoxHeader };