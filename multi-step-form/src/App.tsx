import { Route, Routes } from "react-router-dom";

import { PersonalInfoForm } from "./components/PersonalInfoForm";
import { AppProvider } from "./state";
import { SelectYourPlan } from "./components/SelectYourPlan";
import { PickAddOns } from "./components/PickAddOns";
import { FinishUp } from "./components/FinishUp";

function App() {
  return (
    <div className="flex items-center justify-center h-screen bg-white-dark">
      <AppProvider>
          <div className="p-6 mx-4 bg-white shadow-md rounded-xl border-grey">
            <Routes>
              <Route path="/" element={<PersonalInfoForm />} />
              <Route path="/plan" element={<SelectYourPlan />} />
              <Route path="/addons" element={<PickAddOns />} />
              <Route path="/finish" element={<FinishUp />} />
            </Routes>
          </div>
      </AppProvider>
    </div>
  )
}

{/* <FormProvider {...formMethods}>
  <form onSubmit={formMethods.handleSubmit(onSubmit)}>
    <FormCard>
      <PersonalInfoForm />
      <SelectYourPlan />
      <PickAddOns />
      <FinishUp />
      <FormCompleted />
    </FormCard>
    <div className="absolute inset-x-0 bottom-0 h-[72px] bg-white">
      <div className="flex items-center justify-between h-full px-4">
        <button className="text-grey-dark" type="button">Go Back</button>
        <button className="px-4 py-2 text-white rounded-[4px] text-sm bg-blue-dark" type="button">Next Step</button>
      </div>
    </div>
  </form>
</FormProvider> */}

export default App
