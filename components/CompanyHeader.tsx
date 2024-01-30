import StarRating from "@/components/StarRating";
import RatingTooltip from "@/components/RatingTooltip";
import { calculateDistance } from "@/lib/utils";

interface CompanyHeaderProps {
  name: string;
  rating: number;
  address: string;
  latitude: number;
  longitude: number;
  currentLocation: {
    latitude: number;
    longitude: number;
  };
}

const CompanyHeader: React.FC<CompanyHeaderProps> = ({ name, rating, address, latitude, longitude, currentLocation }) => {
  return (
    <div className="flex items-start justify-between pb-4 pt-4">
      <div>
        <h2 className="text-2xl font-bold text-gray-700">{name}</h2>
        <div className="items-center md:flex md:space-x-2 md:divide-x-2">
          <div className="relative text-yellow-400">
            <StarRating rating={rating} />
            <span className="ml-2 mr-1 text-xs font-bold text-gray-700">{rating.toFixed(1)}/5</span>
            <RatingTooltip />
          </div>
          <p className="my-4 font-serif text-sm font-medium text-gray-500 md:my-0 md:pl-4">
            {address} <span className="font-bold">({calculateDistance(currentLocation.latitude, currentLocation.longitude, latitude, longitude).toFixed(2)} miles away)</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompanyHeader;
