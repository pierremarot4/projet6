import PropTypes from "prop-types";
import "./card.scss";

function Card({ picture, title, href }) {
  return (
    <a href={href} className="card">
      <div className="card__container">
        <img
          src={picture}
          alt="logement"
          className="card__container__picture"
        />
        <div className="card__container__title">
          <span className="card__container__title__span">{title}</span>
        </div>
      </div>
    </a>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default Card;
