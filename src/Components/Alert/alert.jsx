import "../../Assets/Styles/alert.css";
import Card from "../Cards/card-props";

const Alert = ({ header, message, show, onClose }) => {
	if (!show) {
		return null;
	}
	return (
		<div className='alert-container'>
			<Card className='alert-success'>
				<div className='alert-icon'>
					<div className='success-icon'></div>
				</div>
				<div className='information-container'>
					<div className='alert-title'>
						<h1 className='title'>{header}</h1>
					</div>
					<div className='alert-message'>
						<p>{message}</p>
					</div>
				</div>
				<div className='alert-button'>
					<button className='btn-primary' onClick={onClose}>
						Close
					</button>
				</div>
			</Card>
		</div>
	);
};

export default Alert;
