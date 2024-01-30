import { calculateDistance } from "@/lib/utils";
import { currentLocation } from "@/lib/sorting";

interface CompanyPerksProps {
  selectedDistance: string;
  latitude: number;
  longitude: number;
  review_count: number;
  nearbyLabel: string;
  popularLabel: string;
}

const CompanyPerks: React.FC<CompanyPerksProps> = ({ selectedDistance, latitude, longitude, review_count, nearbyLabel, popularLabel }) => {
  return (
    selectedDistance !== "ALL" &&
    calculateDistance(currentLocation.latitude, currentLocation.longitude, latitude, longitude) <= 5 && (
      <div className="mb-4 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi-geo-alt-fill mr-1 fill-teal-700" viewBox="0 0 16 16">
          <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16m0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15" />
        </svg>
        <span className="mr-3 font-serif">{nearbyLabel}</span>
        {review_count >= 100 && (
          <>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-fire mr-1 fill-teal-700" viewBox="0 0 16 16">
              <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16m0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15" />
            </svg>
            <span className="mr-3 font-serif">{popularLabel}</span>
          </>
        )}
      </div>
    )
  );
};

export default CompanyPerks;