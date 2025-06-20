import { BaseURL_TWO, residence_name } from '../constants/domain';
import axiosInstance from './axios_instance';
import axios from 'axios';

export const fetchRegistrationDetails = async (token) => {
  const res = await axios.get(`${BaseURL_TWO}/auth/complete-registration`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return res.data;
};

export const completeRegistrationDetails = async (data) => {
  const res = await axiosInstance.post(
    `${BaseURL_TWO}/auth/complete-registration/set-password`,
    data
  );
  return res.data;
};
