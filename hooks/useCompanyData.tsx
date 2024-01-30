import useSWR from "swr";

const fetcher = (url: string | URL | Request) => fetch(url).then((res) => res.json());

function useCompanyData() {
  const { data, error } = useSWR("/api/companyData", fetcher);
  return { data, error };
}

export default useCompanyData;
