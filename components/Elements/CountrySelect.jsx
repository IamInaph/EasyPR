import { countries } from '@/utils/country-list';
import ReactSelect from 'react-select';

const CountrySelect = ({ defaultValue, handleCountryChange }) => {
  const countryOptions = countries.map((country) => ({
    label: country.name,
    value: country.code,
  }));
  return (
    <ReactSelect
      value={defaultValue}
      options={countryOptions}
      isSearchable
      isClearable
      onChange={handleCountryChange}
    />
  );
};

export default CountrySelect;
