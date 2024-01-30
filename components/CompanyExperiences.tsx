import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faChevronDown } from "@fortawesome/free-solid-svg-icons";

interface CompanyExperiencesProps {
  title: string;
  reviewText: string;
  reviewerName: string;
}

const CompanyExperiences: React.FC<CompanyExperiencesProps> = ({ title, reviewText, reviewerName }) => {
  return (
    <div className="pt-4">
      <h3 className="font-semibold text-gray-500">{title}</h3>
      <blockquote className="mt-4 bg-gray-100 p-4 font-serif italic text-gray-600">
        <p>&quot;{reviewText}&quot;</p>
        <p className="mt-4 text-right not-italic">- {reviewerName}</p>
      </blockquote>
      <div className="flex items-center justify-end pt-4">
        <button className="flex items-center px-3 py-1 font-bold text-gray-500 transition duration-300 hover:bg-blue-600 hover:text-white">
          SEE MORE <FontAwesomeIcon className="ml-3 text-sky-500" icon={faChevronDown} />
        </button>
      </div>
    </div>
  );
};
export default CompanyExperiences;
