import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faChevronDown } from "@fortawesome/free-solid-svg-icons";

interface CompanyServicesProps {
  title: string;
  services: string[];
  selectedServices: string[];
}

const CompanyServices: React.FC<CompanyServicesProps> = ({ title, services, selectedServices }) => {
  return (
    <div className="pt-4">
      <h3 className="font-semibold text-gray-500">{title}</h3>
      <ul className="my-4 flex flex-wrap items-center font-serif leading-10">
        {services.map((service) => (
          <li key={service} className="flex items-center">
            {selectedServices.includes(service) ? <FontAwesomeIcon className={`mx-2 bg-yellow-200 p-3 font-bold text-green-600`} icon={faCheck} /> : <FontAwesomeIcon className={`mx-2 text-green-500`} icon={faCheck} />}
            <span className={`mr-3 ${selectedServices.includes(service) ? "font-bold text-green-600" : ""}`}>{service}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default CompanyServices;
