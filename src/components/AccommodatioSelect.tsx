import { EMPTY_VALUE } from "../constants";
import { formDataType, selectDataType } from "../types";
import { Select } from "./Select";

export function AccommodatioSelect({
  formData,
  setFormData,
}: {
  formData: formDataType;
  setFormData: React.Dispatch<React.SetStateAction<formDataType>>;
}) {
  const defaultOption: selectDataType = {
    label: "Вариант проживания",
    value: EMPTY_VALUE,
  };
  const isDisable =
    !formData.countryChecked ||
    !formData.cityChecked ||
    !formData.universityTypeChecked;
  const options = formData.countryChecked
    ? formData.accommodationOptions[formData.countryChecked]
    : [defaultOption];
  return (
    <Select
      value={formData.accomodationOptionChecked}
      name="selectAccomodation"
      isDisable={isDisable}
      options={options}
      onSelect={(accommodationOption) =>
        setFormData({
          ...formData,
          accomodationOptionChecked: accommodationOption,
        })
      }
    />
  );
}
