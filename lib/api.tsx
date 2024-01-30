export async function getCompany() {
  const baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "";
  const response = await fetch(`${baseUrl}/api/company`);
  const companies = await response.json();
  return companies;
}
