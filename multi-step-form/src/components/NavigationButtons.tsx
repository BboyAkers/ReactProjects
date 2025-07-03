import { NavigateFunction } from "react-router-dom";

const NavigationButtons = ({ navigate }: { navigate: NavigateFunction }) => {
  return (
    <>
      <div className="flex items-center justify-between h-full">
        <button className="text-grey-dark" type="button" disabled={location.pathname === "/"} onClick={() => navigate(-1)}>Go Back</button>
        {location.pathname == "/finish" ? (
          <button className="px-4 py-2 text-white rounded-[4px] text-sm bg-purple" type="submit">Confirm</button>
        ) : (
        location.pathname == "/completed" ? (
          <button className="px-4 py-2 text-white rounded-[4px] text-sm bg-purple" type="submit">New Form</button>
        ) : 
          <button className="px-4 py-2 text-white rounded-[4px] text-sm bg-blue-dark" type="submit">Next Step</button>
        )} 
      </div>
    </>
  )
}

export default NavigationButtons;
