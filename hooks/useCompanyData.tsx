import useSWR from "swr";

const fetcher = (url: string | URL | Request) => fetch(url).then((res) => res.json());

function useCompanyData() {
  const baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000";
  const { data, error } = useSWR(`${baseUrl}/api/company`, fetcher);
  return { data, error };
}

export default useCompanyData;
