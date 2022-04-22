import TrackCard from '../Cards/card-track';
import '../../Assets/Styles/tracks.css';

const Tracks = ({ tracks, onSelectTrack, selectedTracks }) => {
	function renderTrackCards() {
		return tracks.map((track) => {
			return (
				<TrackCard
					key={track.id}
					track={track}
					onSelectTrack={onSelectTrack}
					isSelected={selectedTracks.find(
						(selectedTrack) => selectedTrack.id === track.id
					)}
				/>
			);
		});
	}

	return <div className='results'>{renderTrackCards()}</div>;
};

export default Tracks;
