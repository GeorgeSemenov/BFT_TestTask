import { formDataType, selectDataType } from "./types";

export function CitySelect({
  cities,
  onSelect,
}: {
  cities: selectDataType[];
  onSelect: (value: string) => void;
}) {
  return (
    <select name="selectCity" onChange={(e) => onSelect(e.target.value)}>
      {cities.map((city) => (
        <option value={city.value}>{city.label}</option>
      ))}
    </select>
  );
}
