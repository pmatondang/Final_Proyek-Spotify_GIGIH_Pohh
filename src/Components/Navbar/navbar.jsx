import * as React from 'react';
import { useTypedSelector } from 'Hooks/typedReduxHooks';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import '../../Assets/Styles/navbar.css';


const Navbar = ({ logo, modalShow, logout, isDisplayed }) => {
	const userName = useTypedSelector(
		(state) => state.auth.userInfo?.display_name
	);

	const [auth] = React.useState(true);
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleMenu = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<>
			<div className='container'>
				<img src={logo} alt='Spotify Logo' />
				<div className='nav-list'>
					<div className='user-info'>
						<p>Hello, {userName}</p>
					</div>
					<button
						className='btn-primary btn-create'
						style={isDisplayed ? { display: 'block' } : { display: 'none' }}
						onClick={modalShow}>
						Create Playlist
					</button>
					<Toolbar>
						{auth && (
							<div>
								<IconButton
									size='large'
									aria-label='account of current user'
									aria-controls='menu-appbar'
									aria-haspopup='true'
									onClick={handleMenu}
									color='inherit'
								>
									<Avatar alt='Poibe Profile' src='../../Assets/Images/poibe.png' />
								</IconButton>
								<Menu
									id='menu-appbar'
									anchorEl={anchorEl}
									anchorOrigin={{
										vertical: 'top',
										horizontal: 'right',
									}}
									keepMounted
									transformOrigin={{
										vertical: 'top',
										horizontal: 'right',
									}}
									open={Boolean(anchorEl)}
									onClose={handleClose}
								>
									<MenuItem onClick={logout}>Logout</MenuItem>
								</Menu>
							</div>
						)}
					</Toolbar>

				</div>
			</div>
		</>
	);
};

export default Navbar;
