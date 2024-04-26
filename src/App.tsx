import React, { useState } from "react";
import "./App.css";
import { countryValueType, formDataType } from "./types";
import { initialFomrData } from "./initialValue";
import { CitySelect } from "./CitySelect";
import { EMPTY_VALUE } from "./constants";

function App() {
  const [formData, setFormData] = useState<formDataType>(initialFomrData);
  return (
    <main>
      <form>
        <select
          name="selectCountry"
          onChange={(e) => {
            console.log(e.target.value);
            setFormData({
              ...formData,
              countryChecked: e.target.value as countryValueType,
            });
          }}
        >
          {formData.countries.map((country) => (
            <option value={country.value} key={country.value}>
              {country.label}
            </option>
          ))}
        </select>

        {formData.countryChecked ? (
          <CitySelect
            cities={formData.cities[formData.countryChecked]}
            onSelect={(city) =>
              setFormData({
                ...formData,
                cityChecked: city,
              })
            }
          />
        ) : (
          <></>
        )}
      </form>
    </main>
  );
}

export default App;
