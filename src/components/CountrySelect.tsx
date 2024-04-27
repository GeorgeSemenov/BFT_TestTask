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
        setFormData({
          ...initialFormData,
          countryChecked: selectedValue as countryValueType,
        });
      }}
    />
  );
}
