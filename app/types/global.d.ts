export{}
declare global {
  interface Company {
    featured: boolean;
    name: string;
    slug: string;
    address: string;
    services: string[];
    rating: {
      th: number;
    };
    third_party_ratings: string[];
    review_count: number;
    latitude: number;
    longitude: number;
  }
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
  interface CompanyCardProps {
    company: Company;
    slug: string;
    selectedServices: string[];
    selectedDistance: string;
    userLocation: {
      latitude: number;
      longitude: number;
    };
    filteredData: number;
  }
  interface StarRatingProps {
    rating: number;
  }
}
