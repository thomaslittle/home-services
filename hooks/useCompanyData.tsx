import useSWR from "swr";

const fetcher = (url: string | URL | Request) => fetch(url).then((res) => res.json());

function useCompanyData() {
  const baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "";
  const { data, error } = useSWR(`${baseUrl}/api/company`, fetcher);
  return { data, error };
}

export default useCompanyData;
