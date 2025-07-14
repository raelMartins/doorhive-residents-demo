import { BASE_URL } from '@/constants/domain';
import axios from './axios_instance';

export const fetchResidence = async (id: string) => {
  return await axios.get(`${BASE_URL}/residences/${id}`);
};

export const getResidents = async (id: string) => {
  return await axios.get(
    `${BASE_URL}/residences/${id}/residents?page=1&limit=20`
  );
};
