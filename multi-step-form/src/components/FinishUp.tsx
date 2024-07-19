const FinishUp = () => {
  return (
    <>
      <h2 className="pb-2 text-2xl font-semibold text-blue-dark">Finish up</h2>
      <p className="mb-4 font-light text-grey-dark">Double-check everything looks OK before confirming.</p>
      <div className="p-4 mb-2 text-sm bg-grey-light">
        <div className="flex justify-between">
          <div>
            <p className="font-medium text-blue-dark">Arcade (Monthly)</p>
            <a href="#" className="underline text-grey-dark">Change</a>
          </div>
          <span className="font-bold">$9/mo</span>
        </div>
        <hr className="my-3" />
        <p className="flex justify-between pb-2 text-grey-dark">Online service <span className="text-blue-dark">+$1/mo</span></p>
        <p className="flex justify-between text-grey-dark">Large storage <span className="text-blue-dark">+$2/mo</span></p>
      </div>
      <p className="flex justify-between px-2 py-3 text-sm text-grey-dark">Total (per month) <span className="text-base font-bold text-purple">+$12/mo</span></p>
    </>
  )
}

export { FinishUp }
