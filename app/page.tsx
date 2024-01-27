import Image from "next/image";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt, faCheck, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { promises as fs } from "fs";

export default async function Home() {
  const file = await fs.readFile(process.cwd() + "/app/data.json", "utf8");
  const data = JSON.parse(file);

  return (
    <main className="py-6">
      <div className="container mx-auto max-w-screen-lg px-4">
        <div className="mb-6 justify-end space-y-2 md:flex md:space-x-4 md:space-y-0">
          <div>
            <select className="w-full rounded-md border-2 border-gray-200 bg-white px-4 py-2 text-xs font-bold leading-tight text-gray-500 focus:border-gray-500 focus:bg-white focus:outline-none md:text-base">
              <option>STAR RATING</option>
            </select>
          </div>
          <div>
            <select className="w-full rounded-md border-2 border-gray-200 bg-white px-4 py-2 text-xs font-bold leading-tight text-gray-500 focus:border-gray-500 focus:bg-white focus:outline-none md:text-base">
              <option>SERVICES OFFERED</option>
            </select>
          </div>
          <div>
            <select className="w-full rounded-md border-2 border-gray-200 bg-white px-4 py-2 text-xs font-bold leading-tight text-gray-500 focus:border-gray-500 focus:bg-white focus:outline-none md:text-base">
              <option>DISTANCE</option>
            </select>
          </div>
        </div>

        <div className="rounded-lg border-2 border-gray-200 bg-white px-6 py-10 md:px-16">
          <div className="items-start justify-between md:flex">
            <Image alt="Lennox logo placeholder" width={100} height={50} src="https://placehold.co/100x50" />
            <button className="mt-6 h-12 w-full bg-blue-600 font-medium text-white transition duration-300 hover:bg-blue-700 md:mt-0 md:w-fit md:px-14">Get Quote</button>
          </div>
          <div className="flex items-center justify-between pb-4 pt-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-700">Lennox HVAC & Heating</h2>
              <div className="mt-2 items-center md:flex md:space-x-2 md:divide-x-2">
                <div className="text-yellow-400">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStarHalfAlt} />
                  <span className="ml-2 text-xs font-bold text-gray-700">4.5/5</span>
                  <div className="tooltip ml-1 text-black">
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="20" fill="currentColor" className="bi bi-info-circle" viewBox="0 0 16 16">
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                      <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                    </svg>
                    <div className="tooltiptext">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      <p className="font-bold">BETTER THAN 90% OF COMPANIES</p>
                    </div>
                  </div>
                </div>
                <p className="my-4 font-serif text-sm font-medium text-gray-500 md:my-0 md:pl-4">1222 Barrow Dr. Charlotte, NC 27654</p>
              </div>
            </div>
          </div>
          <div className="mb-4 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi-geo-alt-fill mr-1 fill-teal-700" viewBox="0 0 16 16">
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
            </svg>
            <span className="mr-3 font-serif">Nearby</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-fire mr-1 fill-teal-700" viewBox="0 0 16 16">
              <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16m0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15" />
            </svg>
            <span className="mr-3 font-serif">Popular</span>
          </div>
          <div className="pt-4">
            <h3 className="font-semibold text-gray-500">SERVICES OFFERED</h3>
            <ul className="my-4 flex flex-wrap items-center font-serif leading-10">
              <li>
                <FontAwesomeIcon className="mx-2 text-green-500 first:ml-0" icon={faCheck} />
                <span className="mr-3">Window Install & Replacement</span>
              </li>
              <li>
                <FontAwesomeIcon className="mr-2 text-green-500" icon={faCheck} />
                <span className="mr-3">Sliding Glass Doors</span>
              </li>
              <li>
                <FontAwesomeIcon className="mr-2 text-green-500" icon={faCheck} />
                <span className="mr-3">Window Install & Replacement</span>
              </li>
              <li>
                <FontAwesomeIcon className="mr-2 text-green-500" icon={faCheck} />
                <span className="mr-3">Bay Windows</span>
              </li>
              <li>
                <FontAwesomeIcon className="mr-2 text-green-500" icon={faCheck} />
                <span className="mr-3">Storm Windows</span>
              </li>
              <li>
                <FontAwesomeIcon className="mr-2 text-green-500 " icon={faCheck} />
                <span className="mr-3">Window Install & Replacement</span>
              </li>
            </ul>
          </div>
          <div className="pt-4">
            <h3 className="font-semibold text-gray-500">EXPERIENCES</h3>
            <blockquote className="mt-4 bg-gray-100 p-4 font-serif italic text-gray-600">
              “We could not be happier with our HVAC system. Lorem ipsum dolor sit amet consectetur. Dictum fusce dignissim non in magna id. Elementum enim leo aliquam gravida phasellus eget nulla.”
              <p className="mt-4 text-right">- Shane D.</p>
            </blockquote>
          </div>
          <div className="flex items-center justify-end pt-4">
            <button className="flex items-center px-3 py-1 font-bold text-gray-500 transition duration-300 hover:bg-blue-600 hover:text-white">
              SEE MORE <FontAwesomeIcon className="ml-3 text-sky-500" icon={faChevronDown} />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
