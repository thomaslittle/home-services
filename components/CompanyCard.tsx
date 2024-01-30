import React from "react";
import StarRating from "@/components/StarRating";
import RatingTooltip from "@/components/RatingTooltip";
import { calculateDistance } from "@/lib/utils";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faChevronDown } from "@fortawesome/free-solid-svg-icons";

const CompanyCard: React.FC<CompanyCardProps> = ({ company, slug, selectedServices, selectedDistance, userLocation, filteredData }) => {
  const { name, address, rating, services, featured, review_count, latitude, longitude } = company;
  return (
    <div className="relative">
      <section>
        {/* show featured header if entry has "featured": true */}
        {featured && <div className="absolute left-0 -top-10 z-0 h-12 w-full rounded-t-lg bg-sky-500 p-4 py-2 text-white">FEATURED PARTNER</div>}
        <div className={`relative z-10 mb-6 rounded-lg  bg-white px-6 py-10 md:px-16 m-0 border-2 ${featured ? "mt-14 border-sky-500" : "mt-0 border-gray-200"}`}>
          {/* company info */}
          <div className="items-start justify-between md:flex">
            <img alt={`${name} logo`} className="w-1/4" src={`https://d126ytvel6227q.cloudfront.net/logos/${slug}.jpg`} />
            <button className="mt-6 h-12 w-full bg-blue-600 font-medium text-white transition duration-300 hover:bg-blue-700 md:mt-0 md:w-fit md:px-14">Get Quote</button>
          </div>
          <div className="flex items-center justify-between pb-4 pt-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-700">{name}</h2>
              {/* company rating */}
              <div className="items-center md:flex md:space-x-2 md:divide-x-2">
                <div className="relative text-yellow-400">
                  <StarRating rating={rating.th} />
                  <span className="ml-2 mr-1 text-xs font-bold text-gray-700">{rating.th.toFixed(1)}/5</span>
                  <RatingTooltip />
                </div>
                {/* address / distance from user */}
                <p className="my-4 font-serif text-sm font-medium text-gray-500 md:my-0 md:pl-4">
                  {address} <span className="font-bold">({calculateDistance(userLocation.latitude, userLocation.longitude, latitude, longitude).toFixed(2)} miles away)</span>
                </p>
              </div>
            </div>
          </div>
          {/* nearby / popular */}
          {selectedDistance !== "ALL" && calculateDistance(userLocation.latitude, userLocation.longitude, latitude, longitude) <= 5 && (
            <div className="mb-4 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi-geo-alt-fill mr-1 fill-teal-700" viewBox="0 0 16 16">
                <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16m0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15" />
              </svg>
              <span className="mr-3 font-serif">Nearby</span>
              {/* only show popular >= 100 reviews (do we need to include third_party_ratings?) */}
              {review_count >= 100 && (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-fire mr-1 fill-teal-700" viewBox="0 0 16 16">
                    <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16m0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15" />
                  </svg>
                  <span className="mr-3 font-serif">Popular</span>
                </>
              )}
            </div>
          )}
          {/* services offered */}
          <div className="pt-4">
            <h3 className="font-semibold text-gray-500">SERVICES OFFERED</h3>
            <ul className="my-4 flex flex-wrap items-center font-serif leading-10">
              {/* iterate over services */}
              {services.map((service) => (
                <li key={service} className="flex items-center">
                  {selectedServices.includes(service) ? <FontAwesomeIcon className={`mx-2 bg-yellow-200 p-3 font-bold text-green-600`} icon={faCheck} /> : <FontAwesomeIcon className={`mx-2 text-green-500`} icon={faCheck} />}
                  <span className={`mr-3 ${selectedServices.includes(service) ? "font-bold text-green-600" : ""}`}>{service}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* experiences */}
          <div className="pt-4">
            <h3 className="font-semibold text-gray-500">EXPERIENCES</h3>
            <blockquote className="mt-4 bg-gray-100 p-4 font-serif italic text-gray-600">
              {/* reviews are hardcoded for now - no data available */}
              <p>&quot;We could not be happier with our HVAC system. Lorem ipsum dolor sit amet consectetur. Dictum fusce dignissim non in magna id. Elementum enim leo aliquam gravida phasellus eget nulla.&quot;</p>
              <p className="mt-4 text-right">- Shane D.</p>
            </blockquote>
          </div>
          <div className="flex items-center justify-end pt-4">
            <button className="flex items-center px-3 py-1 font-bold text-gray-500 transition duration-300 hover:bg-blue-600 hover:text-white">
              SEE MORE <FontAwesomeIcon className="ml-3 text-sky-500" icon={faChevronDown} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CompanyCard;
