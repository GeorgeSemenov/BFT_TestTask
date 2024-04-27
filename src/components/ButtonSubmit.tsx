import { formDataType } from "../types";

export function ButtonSubmit({ formData }: { formData: formDataType }) {
  const isDisable =
    !formData.countryChecked ||
    !formData.cityChecked ||
    !formData.universityTypeChecked ||
    !formData.accomodationOptionChecked;
  return (
    <button type="submit" disabled={isDisable}>
      ОТПРАВИТЬ
    </button>
  );
}
