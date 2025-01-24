import { useQuery } from 'react-query';
import axios from 'axios';
import { CompanyData } from '../types/company';

axios.defaults.baseURL = 'http://localhost:3001';

export const useCompanies = () => {
  return useQuery<CompanyData[]>('companies', 
    async () => {
      try {
        const { data } = await axios.get('/companies');
        return data;
      } catch (error) {
        console.error('Failed to fetch companies:', error);
        throw error;
      }
    },
    {
      staleTime: 60000, 
      cacheTime: 300000, 
      retry: 2,
      refetchOnWindowFocus: false,
    }
  );
};
