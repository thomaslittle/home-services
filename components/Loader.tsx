const Loader = () => {
  return (
    <div>
      <div className="absolute start-0 top-0 z-50 h-full w-full rounded-lg bg-white/[.5] dark:bg-zinc-800/[.4]"></div>
      <div className="absolute start-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 transform">
        <div className="z-60 inline-block h-6 w-6 animate-spin rounded-full border-[3px] border-current border-t-transparent text-blue-600 dark:text-blue-500" role="status" aria-label="loading">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
