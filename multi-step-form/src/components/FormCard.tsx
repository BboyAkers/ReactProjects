// import { FormDetails } from "./FormDetails"

import { PropsWithChildren } from "react"

const FormCard = ({children}: PropsWithChildren) => {
  return (
    <div className="p-6 mx-4 bg-white shadow-md rounded-xl border-grey">
      {children}
    </div>
  )
}

export { FormCard }
