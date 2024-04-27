import { formDataType } from "./types";
import { EMPTY_VALUE } from "./constants";

export const initialFormData: formDataType = {
  countries: [
    { label: "Выбор страны", value: EMPTY_VALUE },
    { label: "РБ", value: "rb" },
    { label: "РФ", value: "rf" },
  ],
  countryChecked: EMPTY_VALUE,

  cities: {
    rb: [
      { label: "Выбор города", value: EMPTY_VALUE },
      { label: "Минск", value: "Minsk" },
      { label: "Гомель", value: "Gomel" },
    ],
    rf: [
      { label: "Выбор города", value: EMPTY_VALUE },
      { label: "Москва", value: "Moscow" },
      { label: "Сочи", value: "Sochi" },
    ],
  },
  cityChecked: EMPTY_VALUE,

  universityTypes: [
    { label: "Вид ВУЗа", value: EMPTY_VALUE },
    { label: "Технический", value: "techTechnical" },
    { label: "Гуманитарный", value: "humanities" },
  ],
  universityTypeChecked: EMPTY_VALUE,

  accommodationOptions: {
    rb: [
      { label: "Вариант проживания", value: EMPTY_VALUE },
      { label: "Общежития", value: "dormitory" },
      { label: "Не интересует", value: "notInterested" },
    ],
    rf: [
      { label: "Вариант проживания", value: EMPTY_VALUE },
      { label: "Общежития", value: "dormitory" },
      { label: "Аренда", value: "rent" },
      { label: "Не интересует", value: "notInterested" },
      { label: "Общежития + Аренда", value: "dormitoryAndRent" },
    ],
  },
  accomodationOptionChecked: EMPTY_VALUE,
};
