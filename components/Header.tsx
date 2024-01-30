import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import ResultsCount from "@/components/ResultsCount";

interface HeaderProps {
  isLoading: boolean;
  isLoadingServices: boolean;
  selectedServices: string[];
  handleSortChange: (value: string) => void;
  handleServiceChange: (selected: string | string[]) => void;
  handleDistanceChange: (value: string) => void;
  selectedDistance: string;
  sortedDataLength: number;
  allServices: string[];
}

const Header: React.FC<HeaderProps> = ({ isLoadingServices, selectedServices, handleSortChange, handleServiceChange, selectedDistance, handleDistanceChange, sortedDataLength, allServices }) => {
  const formattedSortedDataLength = sortedDataLength.toString();

  return (
    <header className="mb-6 justify-end space-y-2 md:flex md:space-x-4 md:space-y-0">
      {/* rating */}
      <Select onValueChange={(value) => handleSortChange(value)}>
        <SelectTrigger className="flex w-full items-center md:w-auto">
          <SelectValue placeholder="STAR RATING" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem className="text-left" value="RATING_HIGH_TO_LOW">
              RATING (Highest)
            </SelectItem>
            <SelectItem className="text-left" value="RATING_LOW_TO_HIGH">
              RATING (Lowest)
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      {/*services */}
      <Select disabled={isLoadingServices} onValueChange={(value) => handleServiceChange(value)}>
        <SelectTrigger className="flex w-full items-center justify-between md:w-auto">
          <SelectValue placeholder="SERVICES OFFERED" />
          {selectedServices.length > 0 && <ResultsCount text={formattedSortedDataLength} />}
        </SelectTrigger>
        {!isLoadingServices && (
          <SelectContent>
            <SelectGroup>
              <SelectItem value="ALL_SERVICES">All Services</SelectItem>
              {allServices.map((service, index) => (
                <SelectItem key={index} value={service}>
                  {service}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        )}
      </Select>
      {/* distance */}
      <Select onValueChange={(value) => handleDistanceChange(value)}>
        <SelectTrigger className="flex w-full items-center justify-between md:w-auto">
          <SelectValue placeholder="DISTANCE" />
          {selectedDistance && <ResultsCount text={formattedSortedDataLength} />}
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="5">5 miles</SelectItem>
            <SelectItem value="50">50 miles</SelectItem>
            <SelectItem value="100">100 miles</SelectItem>
            <SelectItem value="ALL">ALL</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </header>
  );
};

export default Header;
