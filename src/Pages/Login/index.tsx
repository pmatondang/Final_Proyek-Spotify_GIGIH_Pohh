import { useEffect } from 'react';
import { useHistory } from 'react-router';
import { authSpotify, getUserInfo } from 'FetchAPI/authentication';
import { getToken } from 'Lib/spotify';
import { login, storeUserInfo } from 'Reducers/authRreduer';
import { useTypedDispatch } from 'Hooks/typedReduxHooks';
import logo from '../../Assets/Images/logo.png';
import '../../Assets/Styles/login.css';
import { LoginButton } from 'Components/Material-UI/ui-button';
import LoginIcon from '@mui/icons-material/Login';
import Footer from 'Components/Footer/footer';

const Login = () => {
	const dispatch = useTypedDispatch();
	const history = useHistory();

	useEffect(() => {
		if (window.location.hash) {
			const token = getToken() as string;
			dispatch(login(token));
			getUserInfo(token).then((data) => dispatch(storeUserInfo(data)));
			history.push('/create-playlist');
		}
	}, [dispatch, history]);

	return (
		<>
			<div className='login' data-testid="login-test">
				<div className='login-body'>
					<h1><img src={logo} className='img-logo' alt='logo spotify' />
						<h1>Hello there,,</h1>
						<h2>Find Your Favorite Music And Make Your Playlist App!!</h2><br></br>
						<LoginButton onClick={authSpotify} variant="contained" endIcon={<LoginIcon />}>Login With Spotify</LoginButton>
					</h1>
				</div>
			</div >
			<Footer />
		</>
	);
};

export default Login;
