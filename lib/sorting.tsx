import { calculateDistance } from "@/lib/utils";
import { SetStateAction } from "react";

export const sortCompaniesByRating = (companies: any, sortBy: string) => {
  const sortedCompanies = [...companies];

  switch (sortBy) {
    case "RATING_HIGH_TO_LOW":
      sortedCompanies.sort((a, b) => b.rating.th - a.rating.th);
      break;
    case "RATING_LOW_TO_HIGH":
      sortedCompanies.sort((a, b) => a.rating.th - b.rating.th);
      break;
    default:
      // Default to sorting by rating high to low
      sortedCompanies.sort((a, b) => b.rating.th - a.rating.th);
      break;
  }

  return sortedCompanies;
};

// mimic user's location as if they live in Tucson, AZ for demo purposes - replace with geolocation
export const currentLocation = {
  latitude: 32.17144,
  longitude: -110.95468,
};

export const filterCompaniesByDistance = (companies: any[], distanceInMiles: number, currentLocation: { latitude: any; longitude: any }) => {
  return companies.filter((company) => {
    const distance = calculateDistance(currentLocation.latitude, currentLocation.longitude, company.latitude, company.longitude);
    return distance <= distanceInMiles;
  });
};

export const sortCompaniesByDistance = (companies: any[], currentLocation: { latitude: any; longitude: any }) => {
  return companies.sort((a, b) => {
    const distanceA = calculateDistance(currentLocation.latitude, currentLocation.longitude, a.latitude, a.longitude);
    const distanceB = calculateDistance(currentLocation.latitude, currentLocation.longitude, b.latitude, b.longitude);
    return distanceA - distanceB;
  });
};

export const performSortByRating = async (data: { companies: any }, sortBy: string, setSortedData, setIsLoading: { (value: SetStateAction<boolean>): void; (arg0: boolean): void }) => {
  if (!data || !data.companies) return;
  const sortedData = sortCompaniesByRating(data.companies, sortBy);
  setIsLoading(true);
  await new Promise((resolve) => setTimeout(resolve, 500));
  setSortedData(sortedData);
  setIsLoading(false);
};

export const performServiceChange = async (selected: string | string[], setSelectedServices: { (value: SetStateAction<string[]>): void; (arg0: string[]): void }, setIsLoading: { (value: SetStateAction<boolean>): void; (arg0: boolean): void }) => {
  setIsLoading(true);
  if (selected === "ALL_SERVICES") {
    setSelectedServices([]);
  } else {
    setSelectedServices(selected as string[]);
  }
  await new Promise((resolve) => setTimeout(resolve, 500));
  setIsLoading(false);
};

export const updateSortedData = async (
  value: string,
  data: { companies: any[] },
  currentLocation: { latitude: any; longitude: any },
  setSelectedDistance: { (value: SetStateAction<string>): void; (arg0: string): void },
  setSortedData: { (value: SetStateAction<Company[]>): void; (arg0: Company[]): void },
  setIsLoading: { (value: SetStateAction<boolean>): void; (arg0: boolean): void },
) => {
  const distanceInMiles = value === "ALL" ? Number.MAX_SAFE_INTEGER : parseInt(value);
  const filteredCompanies = filterCompaniesByDistance(data.companies, distanceInMiles, currentLocation);
  setIsLoading(true);
  await new Promise((resolve) => setTimeout(resolve, 500));
  setSortedData(sortCompaniesByDistance(filteredCompanies, currentLocation));
  setSelectedDistance(value);
  setIsLoading(false);
};
