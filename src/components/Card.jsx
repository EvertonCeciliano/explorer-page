
import PropTypes from 'prop-types';
import styles from './Card.module.css'
function Card(props) {
  return (
    <div className={styles.card}>
    <img src={props.image} alt={props.title} />
    <h2>{props.title}</h2>
    <p>{props.text}</p>
  </div>
  );
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Card;
