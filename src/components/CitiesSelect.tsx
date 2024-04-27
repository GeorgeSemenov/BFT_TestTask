import { EMPTY_VALUE } from "../constants";
import { formDataType, selectDataType } from "../types";
import { Select } from "./Select";

export function CitiesSelect({
  formData,
  setFormData,
}: {
  formData: formDataType;
  setFormData: React.Dispatch<React.SetStateAction<formDataType>>;
}) {
  const defaultOption: selectDataType = {
    label: "Выбор города",
    value: EMPTY_VALUE,
  };
  const isDisable = !formData.countryChecked;
  const options = formData.countryChecked
    ? formData.cities[formData.countryChecked]
    : [defaultOption];
  return (
    <Select
      value={formData.cityChecked}
      name="selectCity"
      isDisable={isDisable}
      options={options}
      onSelect={(city) => {
        if (city !== EMPTY_VALUE) {
          setFormData({
            ...formData,
            cityChecked: city,
          });
        } else {
          setFormData({
            ...formData,
            cityChecked: EMPTY_VALUE,
            universityTypeChecked: EMPTY_VALUE,
            accomodationOptionChecked: EMPTY_VALUE,
          });
        }
      }}
    />
  );
}
