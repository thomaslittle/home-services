import CompanyHeader from "@/components/CompanyHeader";
import CompanyLogo from "@/components/CompanyLogo";
import CompanyPerks from "@/components/CompanyPerks";
import CompanyExperiences from "@/components/CompanyExperiences";
import CompanyServices from "./CompanyServices";

interface CompanyCardProps {
  company: Company;
  slug: string;
  selectedServices: string[];
  selectedDistance: string;
  currentLocation: {
    latitude: number;
    longitude: number;
  };
}

const CompanyCard: React.FC<CompanyCardProps> = ({ company, selectedServices, selectedDistance, currentLocation }) => {
  const { name, address, rating, services, featured, review_count, latitude, longitude } = company;
  return (
    <section className="relative">
      {/* show featured header if entry has "featured": true */}
      {featured && <div className="absolute -top-10 left-0 z-0 h-12 w-full rounded-t-lg bg-sky-500 p-4 py-2 text-white">FEATURED PARTNER</div>}
      <div className={`relative z-10 m-0 mb-6  rounded-lg border-2 bg-white px-6 py-10 md:px-16 ${featured ? "mt-14 border-sky-500" : "mt-0 border-gray-200"}`}>
        <CompanyLogo slug={company.slug} imgAlt={company.name} />
        <CompanyHeader name={name} rating={rating.th} address={address} latitude={latitude} longitude={longitude} currentLocation={currentLocation} />
        <CompanyPerks nearbyLabel="Nearby" popularLabel="Popular" selectedDistance={selectedDistance} latitude={latitude} longitude={longitude} review_count={review_count} />
        <CompanyServices title="SERVICES OFFERED" services={services} selectedServices={selectedServices} />
        <CompanyExperiences title="EXPERIENCES" reviewText="We could not be happier with our HVAC system. Lorem ipsum dolor sit amet consectetur. Dictum fusce dignissim non in magna id. Elementum enim leo aliquam gravida phasellus eget nulla." reviewerName="Shane D." />
      </div>
    </section>
  );
};
export default CompanyCard;
