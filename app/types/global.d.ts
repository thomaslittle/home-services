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
  interface StarRatingProps {
    rating: number;
  }
}
