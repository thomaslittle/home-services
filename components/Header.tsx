import React from "react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Header: React.FC<HeaderProps> = ({ isLoadingServices, selectedServices, handleSortChange, handleServiceChange, selectedDistance, handleDistanceChange, sortedDataLength, allServices }) => {
  return (
    <header className="mb-6 justify-end space-y-2 md:flex md:space-x-4 md:space-y-0">
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
      <Select disabled={isLoadingServices} onValueChange={(value) => handleServiceChange(value)}>
        <SelectTrigger className="flex w-full items-center justify-between md:w-auto">
          <SelectValue placeholder="SERVICES OFFERED" />
          {selectedServices.length > 0 && (
            <div className="ml-4 flex-1 text-right font-serif text-xs font-normal">
              (<span className="font-bold">{sortedDataLength}</span>)
            </div>
          )}
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

      <Select onValueChange={(value) => handleDistanceChange(value)}>
        <SelectTrigger className="flex w-full items-center justify-between md:w-auto">
          <SelectValue placeholder="DISTANCE" />

          {selectedDistance && (
            <div className="ml-4 flex-1 text-right font-serif text-xs font-normal">
              (<span className="font-bold">{sortedDataLength}</span>)
            </div>
          )}
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
