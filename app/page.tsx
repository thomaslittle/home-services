"use client";
import { useState, useEffect } from "react";

import Loader from "@/components/Loader";
import Header from "@/components/Header";
import CompanyCard from "@/components/CompanyCard";
import { userLocation } from "@/lib/sorting";
import { performSortByRating, performServiceChange, updateSortedData } from "@/lib/sorting";
import useCompanyData from "@/hooks/useCompanyData";
import { useServices } from "@/hooks/useServices";

export default function Home() {
  // fetch companies
  const { data, error } = useCompanyData();

  const [sortedData, setSortedData] = useState<Company[]>([] as Company[]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedServices, setSelectedServices] = useState([] as string[]);
  const [selectedDistance, setSelectedDistance] = useState<string>("");

  const { isLoadingServices, allServices } = useServices(data);

  // initial sort
  useEffect(() => {
    if (data && data.companies) {
      setSortedData(data.companies);
    }
  }, [data]);

  const handleSortChange = (value: string) => {
    performSortByRating(data, value, setSortedData, setIsLoading);
  };

  const handleServiceChange = (selected: string | string[]) => {
    performServiceChange(selected, setSelectedServices, setIsLoading);
  };

  const handleDistanceChange = (value: string) => {
    updateSortedData(value, data, userLocation, setSelectedDistance, setSortedData, setIsLoading);
  };

  // services filtering logic
  const filterCompaniesBySelectedServices = (companies: Company[], selectedServices: string[]) => {
    return companies.filter((company: Company) => selectedServices.length === 0 || company.services.some((service) => selectedServices.includes(service)));
  };
  const filteredData = filterCompaniesBySelectedServices(sortedData, selectedServices);

  if (error) return "Error loading companies";
  if (!data && !error) {
    return <Loader />;
  }

  return (
    <main className="py-6">
      <div className="container mx-auto h-lvh max-w-screen-lg px-4">
        {isLoading && <Loader />}
        <Header
          isLoading={isLoading}
          isLoadingServices={isLoadingServices}
          selectedServices={selectedServices}
          handleSortChange={handleSortChange}
          handleServiceChange={handleServiceChange}
          selectedDistance={selectedDistance}
          handleDistanceChange={handleDistanceChange}
          sortedDataLength={filteredData.length}
          allServices={allServices}
        />
        {isLoading && <Loader />}
        <h1 className="mt-20 flex justify-center text-2xl font-bold">{filteredData.length} Results Found.&rdquo;</h1>
        {filteredData.map((entry: Company, index: number) => (
          <CompanyCard key={index} company={entry} slug={entry.slug} selectedServices={selectedServices} selectedDistance={selectedDistance} userLocation={userLocation} filteredData={filteredData.length} />
        ))}
      </div>
    </main>
  );
}
