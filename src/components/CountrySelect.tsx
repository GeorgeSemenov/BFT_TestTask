import { EMPTY_VALUE } from "../constants";
import { initialFormData } from "../initialValue";
import { countryValueType, formDataType } from "../types";
import { Select } from "./Select";

export function CountrySelect({
  formData,
  setFormData,
}: {
  formData: formDataType;
  setFormData: React.Dispatch<React.SetStateAction<formDataType>>;
}) {
  return (
    <Select
      value={formData.countryChecked}
      name="selectCountry"
      options={formData.countries}
      onSelect={(selectedValue) => {
        if (selectedValue !== EMPTY_VALUE) {
          setFormData({
            ...formData,
            countryChecked: selectedValue as countryValueType,
          });
        } else {
          setFormData({ ...initialFormData });
        }
      }}
    />
  );
}
