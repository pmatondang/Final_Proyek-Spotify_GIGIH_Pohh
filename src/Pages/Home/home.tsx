import React, { useState } from 'react';
import { getTracks, createPlaylist } from 'FetchAPI/fetch-api';
import { useHistory } from 'react-router';
import { logout } from 'Reducers/authRreduer';
import { useTypedSelector, useTypedDispatch } from 'Hooks/typedReduxHooks';
import CreatePlaylist from 'Components/Forms/create-playlist';
import Search from 'Components/Seacrh/search';
import Navbar from 'Components/Navbar/navbar';
import Tracks from 'Components/Tracks/tracks';
import Option from 'Components/Option/option';
import Alert from 'Components/Alert/alert';
import logo from '../../Assets/Images/logo.png';
import { Track } from 'Types/spotify-interfaces';
import Description from 'Components/Description/description';
import Footer from 'Components/Footer/footer';
import '../../Assets/Styles/home.css';

const Home = () => {
	const dispatch = useTypedDispatch();
	const history = useHistory();

	const [tracks, setTracks] = useState([]);
	const [keyword, setKeyword] = useState('');

	const [selectedTracks, setSelectedTracks]: any[] = useState([]);

	const token = useTypedSelector((state) => state.auth.accessToken);
	const userInfo = useTypedSelector((state) => state.auth.userInfo);
	const [show, setShow] = useState(false);
	const [showAlert, setShowAlert] = useState(false);

	const handleLogout = () => {
		dispatch(logout());
		localStorage.removeItem('token');
		history.push('/');
	};

	const handleSearch = (e) => {
		e.preventDefault();
		getTracks(keyword, token).then((data) => setTracks(data));
	};

	const handleSelect = (track) => {
		const isSelected = selectedTracks.find(
			(selectedTrack) => selectedTrack === track
		);

		if (isSelected) {
			setSelectedTracks(
				selectedTracks.filter((selectedTrack) => selectedTrack !== track)
			);
		} else {
			setSelectedTracks((prev) => [...prev, track]);
		}
	};

	const handleCreatePlaylist = (e) => {
		e.preventDefault();

		const playlistData = {
			name: e.target.title.value,
			description: e.target.desc.value,
		};

		const tracksToAdd = selectedTracks.map((track: Track) => track.uri);
		createPlaylist(userInfo?.id, playlistData, tracksToAdd, token);

		setSelectedTracks([]);
		setShow(false);
		setShowAlert(true);
	};

	const handleChange = (e) => setKeyword(e.target.value);

	return (
		<>
			<Navbar
				logo={logo}
				modalShow={() => setShow(true)}
				isDisplayed={selectedTracks.length > 0}
				logout={handleLogout}
			/>

			<CreatePlaylist
				onSubmit={handleCreatePlaylist}
				show={show}
				onClose={() => setShow(false)}
			/>

			<Alert
				header={'Hoorayy... Your Playlist Created!'}
				message={'To see them, please check your spotify account and trust me in private playlist..'}
				show={showAlert}
				onClose={() => setShowAlert(false)}
			/>

			<div id='tracks'>
				<Search onChange={handleChange} onSubmit={handleSearch} />
				<Description />
				<Tracks
					tracks={tracks}
					onSelectTrack={handleSelect}
					selectedTracks={selectedTracks}
				/>
				{selectedTracks.length > 0 ? (
					<div className='songs-card' style={{ marginTop: '4rem' }}>
						<h1 className='title'>Selected Songs</h1>
						<div className='selected-songs'>
							<Option selectedTracks={selectedTracks} />
						</div>
					</div>
				) : null}
			</div>

			<Footer />
		</>
	);
};

export default Home;
