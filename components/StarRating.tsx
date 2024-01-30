import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const roundedRating = Math.round(rating * 2) / 2;
  const stars: JSX.Element[] = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(roundedRating)) {
      stars.push(<FontAwesomeIcon key={i} icon={faStar} className="text-yellow-400" />);
    } else if (i === Math.ceil(roundedRating) && roundedRating % 1 !== 0) {
      stars.push(<FontAwesomeIcon key={i} icon={faStarHalfAlt} className="text-yellow-400" />);
    } else {
      stars.push(<FontAwesomeIcon key={i} icon={faStar} className="text-gray-300" />);
    }
  }

  return <>{stars}</>;
};
export default StarRating;
