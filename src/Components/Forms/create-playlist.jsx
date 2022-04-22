import { useState } from 'react';
import Card from '../Cards/card-props';
import '../../Assets/Styles/create-playlist.css';

const CreatePlaylist = ({ onClose, onSubmit, show }) => {
	const [form, setForm] = useState({
		title: "",
		description: "",
	});

	if (!show) {
		return null;
	}

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
		console.log(form);
	};

	return (
		<div className='form-container'>
			<center>
				<div className='form-card'>
					<form className='form' onSubmit={onSubmit}>
						<div className='title'>
							<h2>Create Playlist <button className='btn-close' onClick={onClose}>x</button>
							</h2>
						</div>
						<div className='form-group'>
							<label>Title</label>
							<input
								placeholder='fill title here..'
								minLength={10}
								type="text"
								name="title"
								value={form.title}
								onChange={handleChange}
							/>
						</div>
						<div className='form-group'>
							<label>Description</label>
							<textarea
								id='desc'
								type="text"
								placeholder='fill description here..'
								required>
							</textarea>
						</div>
						<div className='form-group'>
							<button id='submit' className='btn-createForm'>Create</button>
						</div>
					</form>
				</div>
			</center>
		</div >
	);
};

export default CreatePlaylist;
