export type formDataType = {
  countries: { label: string; value: countryValueType }[];
  countryChecked: countryValueType;

  cities: {
    rb: selectDataType[];
    rf: selectDataType[];
  };
  cityChecked: string;

  universityTypes: selectDataType[];
  universityTypeChecked: string;

  accommodationOptions: {
    rb: selectDataType[];
    rf: selectDataType[];
  };
  accomodationOptionChecked: string;
};

export type countryValueType = "" | "rb" | "rf";
export type selectDataType = {
  label: string;
  value: string | undefined;
};
