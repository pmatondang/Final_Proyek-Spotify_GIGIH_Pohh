import '../../Assets/Styles/footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons'


const Footer = () => {
    return (
        <>
            <div className='footer'>
                <p>
                    <i>~ Made with <FontAwesomeIcon icon={faHeart} /> poibe_mtd ~
                    </i>
                </p>
            </div>
        </>
    );
};

export default Footer;
