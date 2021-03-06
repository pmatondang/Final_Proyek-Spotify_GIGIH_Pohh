import { convertDuration } from '../../Lib/spotify';
import Card from './card-props';
import '../../Assets/Styles/card-track.css';
import { Track } from '../../Types/spotify-interfaces';
import { LoginButton } from 'Components/Material-UI/ui-button';

type CardTrackProps = {
	track: Track;
	isSelected: boolean;
	onSelectTrack: any;
};

const CardTrack = ({ track, isSelected, onSelectTrack }: CardTrackProps) => {
	return (
		<Card className='card'>
			<div className='img'>
				<img src={track.album.images[0].url} alt='Album' />
			</div>
			<div className='desc'>
				<div>
					<div className='song-title'>
						<p>{track.name} - {track.album.name}</p>
					</div>
					<div className='artist'>
						<p>{track.artists.map((artist) => artist.name).join(', ')}</p>
					</div>
					<div className='duration'>
						<p>{convertDuration(track.duration_ms)}</p>
					</div>

				</div>
				<div className='selected'>
					<LoginButton variant='contained' className={isSelected ? ' btn-deselect' : ''}
						onClick={() => onSelectTrack(track)}>
						{!isSelected ? 'Select' : 'Deselect'}
					</LoginButton>
				</div>
			</div>
		</Card >
	);
};

export default CardTrack;
