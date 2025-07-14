import { BASE_URL } from '@/constants/domain';
import axiosInstance from './axios_instance';
import axios from 'axios';

export const getResidentPlatformByDomain = async (domain: string) => {
  const res = await axios.get(
    `${BASE_URL}/platforms/resident?domain=${domain}`
  );
  return res.data;
};

export const fetchRegistrationDetails = async (token: string) => {
  const res = await axios.get(`${BASE_URL}/auth/complete-registration`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return res.data;
};

export const completeRegistrationDetails = async (data: {
  password: string;
}) => {
  const res = await axiosInstance.post(
    `${BASE_URL}/auth/complete-registration/set-password`,
    data
  );
  return res.data;
};
