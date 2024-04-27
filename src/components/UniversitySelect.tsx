import { EMPTY_VALUE } from "../constants";
import { formDataType } from "../types";
import { Select } from "./Select";

export function UniversitySelect({
  formData,
  setFormData,
}: {
  formData: formDataType;
  setFormData: React.Dispatch<React.SetStateAction<formDataType>>;
}) {
  const isDisable = !formData.countryChecked || !formData.cityChecked;
  const options = formData.universityTypes;
  return (
    <Select
      value={formData.universityTypeChecked}
      name="selectUniversity"
      isDisable={isDisable}
      options={options}
      onSelect={(university) => {
        if (university !== EMPTY_VALUE) {
          setFormData({
            ...formData,
            universityTypeChecked: university,
          });
        } else {
          setFormData({
            ...formData,
            universityTypeChecked: EMPTY_VALUE,
            accomodationOptionChecked: EMPTY_VALUE,
          });
        }
      }}
    />
  );
}
