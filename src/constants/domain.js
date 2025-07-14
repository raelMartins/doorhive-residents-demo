export const appWindow = typeof window !== 'undefined' ? window : null;

const ENV_PREFIX =
  process.env.NEXT_PUBLIC_SERVER_ENV === 'development'
    ? 'dev'
    : process.env.NEXT_PUBLIC_SERVER_ENV === 'staging'
    ? 'staging'
    : process.env.NEXT_PUBLIC_SERVER_ENV === 'production'
    ? 'api'
    : 'dev';

export const BaseURL_ONE = `https://veerge-00dd56a209cf.herokuapp.com/v1`;
export const BaseURL_TWO = `https://veerge-00dd56a209cf.herokuapp.com/v1`;
export const BASE_URL = `https://veerge-00dd56a209cf.herokuapp.com/v1`;

const isEnvDev = process && process.env.NODE_ENV === 'development';

let residenceUrl;

if (process.env.NODE_ENV === 'development') {
  residenceUrl = 'ice-cold-villas.doorhive.com';
} else {
  //Store Domain for Production
  residenceUrl =
    typeof window !== 'undefined' && window.location.origin && !isEnvDev
      ? window.location.origin?.split('//')[1]
      : null;
}

export const RESIDENCE_URL = residenceUrl;

export const residence_name = () =>
  appWindow &&
  localStorage &&
  JSON?.parse(localStorage.getItem('residenceName'));
