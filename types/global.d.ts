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
}
