interface NoResultsProps {
  resultCount: number;
  resultsText: string;
  adjustText: string;
}

const NoResults: React.FC<NoResultsProps> = ({ resultCount, resultsText, adjustText }) => {
  return (
    <div className="relative z-10 m-0 mb-6 rounded-lg border-2 border-gray-200 bg-white px-6 py-10 md:px-16">
      <h1 className="flex justify-center text-2xl font-bold">
        ({resultCount}) {resultsText}
      </h1>
      <p className="pt-4 text-center font-serif">{adjustText}</p>
    </div>
  );
};

export default NoResults;
