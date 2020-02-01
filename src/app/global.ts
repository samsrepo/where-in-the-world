import { environment } from 'src/environments/environment';

export const AppRoutes = {
  COUNTRIES: 'countries',
  NAME_PARAM: 'name'
};

export const END_POINTS = {
  ALL: environment.country_api + 'all',
  COUNTRY: environment.country_api + ':name'
};
