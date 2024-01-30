const ResultsCount: React.FC<{ text: string }> = ({ text }) => {
  return <div className="ml-4 flex-1 text-right font-serif text-xs font-normal">({text})</div>;
};

export default ResultsCount;
