// Steps/Stepper.js
 
import { useLocation } from "react-router-dom";
 
export const Stepper = () => {
  const location = useLocation();
 
  const getLinkClass = (path:string) => {
    return (
      `px-3 py-2 border-2 rounded-full inline-block ${path === location.pathname ? "bg-blue text-blue-dark border-blue" : "border-white"}`
    );
  };

  return (
    <nav className="md:bg-[url('/bg-sidebar-desktop.svg')] md:h-full md:bg-no-repeat md:bg-contain">
      <ol className="z-50 flex justify-center md:justify-normal mb-8 md:mb-0 space-x-5 md:space-x-0 text-white md:flex-col md:*:h-16 p-5">
        <li className="">
          <span className={getLinkClass("/")}>1</span>
          <div className="hidden md:inline-block">
            <span className="hidden md:block">Step 1</span>
            <span>YOUR INFO</span>
          </div>
        </li>
        <li>
          <span className={getLinkClass("/plan")}>2</span>
          {/* <div>
            <span>Step 2</span>
            <span>SELECT PLAN</span>
          </div> */}
        </li>
        <li>
          <span className={getLinkClass("/addons")}>3</span>
          {/* <div>
            <span>Step 3</span>
            <span>ADD-ONS</span>
          </div> */}
        </li>
        <li>
          <span className={getLinkClass("/finish")}>4</span>
          {/* <div>
            <span>Step 4</span>
            <span>FINISH</span>
          </div> */}
        </li>
        <li>
          <span className={getLinkClass("/completed")}>5</span>
          {/* <div>
            <span>Step 5</span>
            <span>SUBMITTED</span>
          </div> */}
        </li>
      </ol>
    </nav>
  );
};
