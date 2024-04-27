import React, { useState } from "react";
import "./App.css";
import { formDataType } from "./types";
import { initialFormData } from "./initialValue";
import { CitiesSelect } from "./components/CitiesSelect";
import { UniversitySelect } from "./components/UniversitySelect";
import { AccommodatioSelect } from "./components/AccommodatioSelect";
import { ButtonSubmit } from "./components/ButtonSubmit";
import { CountrySelect } from "./components/CountrySelect";

function App() {
  const [formData, setFormData] = useState<formDataType>(initialFormData);
  return (
    <main>
      <form>
        <CountrySelect formData={formData} setFormData={setFormData} />
        <CitiesSelect formData={formData} setFormData={setFormData} />
        <UniversitySelect formData={formData} setFormData={setFormData} />
        <AccommodatioSelect formData={formData} setFormData={setFormData} />
        <ButtonSubmit formData={formData} />
      </form>
    </main>
  );
}

export default App;
