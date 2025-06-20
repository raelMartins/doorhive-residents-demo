import { BaseURL_TWO } from '../constants/domain';
import axios from './axios_instance';

export const fetchResidence = async (id) => {
  return await axios.get(`${BaseURL_TWO}/residences/${id}`);
};

export const getResidents = async (id) => {
  return await axios.get(
    `${BaseURL_TWO}/residences/${id}/residents?page=1&limit=20`
  );
};
