import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form"

import { FormCard } from "./components/FormCard"
import { PersonalInfo } from "./components/PersonalInfo";
import { SelectYourPlan } from "./components/SelectYourPlan";

function App() {
  const formMethods = useForm();
  const multiStepFormData = useState({})
  // const formViewState = useState(1);
  const onSubmit = (data) => console.log(data)
  return (
    <div className="flex items-center justify-center h-screen bg-white-dark">
      <FormProvider {...formMethods}>
        <form onSubmit={formMethods.handleSubmit(onSubmit)}>
          <FormCard>
            {/* <PersonalInfoForm /> */}
            <SelectYourPlan />
          </FormCard>
          <div className="absolute inset-x-0 bottom-0 h-[72px] bg-white">
            <div className="flex items-center justify-between h-full px-4">
              <button className="text-grey-dark" type="button">Go Back</button>
              <button className="px-4 py-2 text-white rounded-[4px] text-sm bg-blue-dark" type="button">Next Step</button>
            </div>
          </div>
        </form>
      </FormProvider>
    </div>
  )
}

export default App
