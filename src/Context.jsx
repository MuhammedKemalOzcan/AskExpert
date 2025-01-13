import React, { createContext, useContext, useState } from "react";
import axios from "axios";

// Context oluştur
const ServiceContext = createContext();

// Context Provider
export const ServiceProvider = ({ children }) => {
  const [services, setServices] = useState([]); // Tüm servislerin listesi
  const [serviceData, setServiceData] = useState(null); // Tek bir servisin detayları
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Tüm servisleri çek
  const fetchServices = async (id) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.get(`https://localhost:7287/api/Services/${id}`);
      console.log("Services response:", response.data);
      setServices(response.data);
    } catch (err) {
      setError("Servisler yüklenirken bir hata oluştu.");
    } finally {
      setIsLoading(false);
    }
  };

  // Belirli bir servisin detayını ServicesId üzerinden çek
  const fetchServiceData = async (serviceId) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.get(`https://localhost:7287/api/ServicesDatas/ByServiceId/${serviceId}`);
      console.log("ServiceData response:", response.data);
      setServiceData(response.data);
    } catch (err) {
      setError("Servis detayı yüklenirken bir hata oluştu.");
    } finally {
      setIsLoading(false);
    }
  };

  // Context'i sağlayan yapı
  return (
    <ServiceContext.Provider
      value={{
        services,
        serviceData,
        isLoading,
        error,
        fetchServices,
        fetchServiceData,
      }}
    >
      {children}
    </ServiceContext.Provider>
  );
};

// Custom Hook
export const useService = () => {
  return useContext(ServiceContext);
};
