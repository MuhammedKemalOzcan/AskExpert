import React, { createContext, useContext, useState } from "react";
import axios from "axios";

// Context oluştur
const DataContext = createContext();

// Context Provider
export const ServiceProvider = ({ children }) => {
  const [services, setServices] = useState([]); // Tüm servislerin listesi
  const [serviceData, setServiceData] = useState(null); // Tek bir servisin detayları
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [gallery, setGallery] = useState([]);

  // Tüm servisleri çek
  const fetchAllServices = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.get(`https://localhost:7287/api/Services`);
      setServices(response.data);
    } catch (err) {
      setError("Servisler yüklenirken bir hata oluştu.");
    } finally {
      setIsLoading(false);
    }
  };

  //id'ye göre servis çek.
  const fetchServices = async (id) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.get(`https://localhost:7287/api/Services/${id}`);
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

  const fetchGallery = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.get("https://localhost:7287/api/Galleries");
      console.log("Gallery response:", response.data); // Verinin doğru geldiğini kontrol et
      setGallery(response.data);
    } catch (error) {
      setError("Gallery verileri çekilirken hata oluştu.");
      console.error("Gallery verileri çekilirken hata oluştu: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchGallerySingle = async (id) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.get(`https://localhost:7287/api/Galleries/${id}`);
      console.log("Gallery response:", response.data); // Verinin doğru geldiğini kontrol et
      setGallery(response.data);
    } catch (error) {
      setError("Gallery verileri çekilirken hata oluştu.");
      console.error("Gallery verileri çekilirken hata oluştu: ", error);
    } finally {
      setIsLoading(false);
    }
  };


  // Context'i sağlayan yapı
  return (
    <DataContext.Provider
      value={{
        services,
        serviceData,
        isLoading,
        error,
        fetchServices,
        fetchAllServices,
        fetchServiceData,
        fetchGallery,
        fetchGallerySingle,
        gallery
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

// Custom Hook
export const useData = () => {
  return useContext(DataContext);
};
