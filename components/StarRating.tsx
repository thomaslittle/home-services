import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";

interface StarRatingProps {
  rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const roundedRating = Math.round(rating * 2) / 2;
  const maxStars = 5;

  const stars = Array.from({ length: maxStars }, (_, index) => {
    const isFullStar = index < Math.floor(roundedRating);
    const isHalfStar = index === Math.floor(roundedRating) && roundedRating % 1 !== 0;

    return <FontAwesomeIcon key={index} icon={isFullStar ? faStar : isHalfStar ? faStarHalfAlt : faStar} className={isFullStar || isHalfStar ? "text-yellow-400" : "text-gray-300"} />;
  });

  return <>{stars}</>;
};

export default StarRating;
