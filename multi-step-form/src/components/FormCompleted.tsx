const FormCompleted = () => {
  return (
    <div className="text-center">
      <img src="/icon-thank-you.svg" alt="svg checkmark icon" aria-hidden="true" className="mx-auto my-5"/>
      <h2 className="pb-2 text-2xl font-semibold text-blue-dark">Thank you!</h2>
      <p className="mb-4 font-light text-grey-dark">
        Thanks for confirming your subscription! We hope you have fun using our platform. 
        If you ever need support, please feel free to email us at support@loremgaming.com.
      </p>
    </div>
  )
}

export { FormCompleted }
