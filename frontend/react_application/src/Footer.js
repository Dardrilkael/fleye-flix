
import './Footer.css';

const Footer = ({ setShowLiked }) => {
    return (
      <footer>
        <button onClick={() => setShowLiked(false)}>Show All Movies</button>
        <button onClick={() => setShowLiked(true)}>Show Liked Movies</button>
        <p>End of Page</p>
      </footer>
    );
  };
  
  export default Footer;
  