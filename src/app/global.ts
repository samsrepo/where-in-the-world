import { environment } from 'src/environments/environment';

export const AppRoutes = {
  COUNTRIES: 'countries',
  NAME_PARAM: 'name'
};

export const END_POINTS = {
  ALL: environment.country_api + 'all',
  COUNTRY: environment.country_api + ':name'
};

export const AppThemes = {
  LIGHT: [
    {property: '--bkg-color', value: 'hsl(0, 0%, 98%)'},
    {property: '--el-color', value: 'hsl(0, 0%, 100%)'},
    {property: '--input-color', value: 'hsl(0, 0%, 52%)'},
    {property: '--text-color', value: 'hsl(200, 15%, 8%)'},
    {property: '--hover-color', value: 'rgb(248, 248, 248)'}
  ],
  DARK: [
    {property: '--bkg-color', value: 'hsl(207, 26%, 17%)'},
    {property: '--el-color', value: 'hsl(209, 23%, 22%)'},
    {property: '--input-color', value: 'hsl(0, 0%, 52%)'},
    {property: '--text-color', value: 'hsl(0, 0%, 100%)'},
    {property: '--hover-color', value: 'hsl(209, 23%, 28%)'}
  ]
};

export const PageSize = 20;
