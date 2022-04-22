import Card from '../Cards/card-props';
import '../../Assets/Styles/option.css';

const Option = ({ selectedTracks }) => {
	return selectedTracks.map((track) => (
		<>
			<div key={track.id}>
				<div className='album-cover'>
					<img src={track.album.images[0].url} alt='track' />
					<p>{track.name}</p>
				</div>
			</div>
		</>
	));
};

export default Option;
