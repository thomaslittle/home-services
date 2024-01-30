interface CompanyLogoProps {
  slug: string;
  imgAlt: string;
}

const CompanyLogo: React.FC<CompanyLogoProps> = ({ slug, imgAlt }) => {
  return <img alt={`${imgAlt} logo`} className="w-1/4" src={`https://d126ytvel6227q.cloudfront.net/logos/${slug}.jpg`} />;
};

export default CompanyLogo;
