import { selectDataType } from "../types";

export function Select({
  options,
  onSelect,
  value,
  name,
  isDisable = false,
}: {
  value: string;
  name: string;
  options: selectDataType[];
  onSelect: (value: string) => void;
  isDisable?: boolean;
}) {
  return (
    <select
      value={value}
      name={name}
      onChange={(e) => onSelect(e.target.value)}
      disabled={isDisable}
    >
      {options.map((city) => (
        <option key={city.value} value={city.value}>
          {city.label}
        </option>
      ))}
    </select>
  );
}
