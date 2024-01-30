import { useState, useEffect } from "react";

export const useServices = (data) => {
  const [isLoadingServices, setIsLoadingServices] = useState(false);
  const [allServices, setAllServices] = useState<string[]>([]);

  const loadServices = () => {
    if (data && data.companies) {
      setIsLoadingServices(true);
      setTimeout(() => {
        const services = new Set();
        data.companies.forEach((company) => {
          company.services.forEach((service) => {
            services.add(service);
          });
        });
        setAllServices(Array.from(services) as string[]);
        setIsLoadingServices(false);
      }, 500);
    }
  };

  useEffect(() => {
    loadServices();
  }, [data]);

  return { isLoadingServices, allServices };
};
