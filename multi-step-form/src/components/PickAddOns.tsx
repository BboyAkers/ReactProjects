const PickAddOns = () => {
  return (
    <>
      <h2 className="pb-2 text-2xl font-semibold">Pick add-ons</h2>
      <p className="mb-4 font-light text-grey-dark">Add-ons help enhance your gaming experience.</p>
      <fieldset>
        <div>
          <label className="flex p-4 my-4 bg-white border rounded-lg cursor-pointer border-grey has-[:checked]:border-purple has-[:checked]:text-purple has-[:checked]:bg-grey-light">
            <input type="checkbox" name="addons" value="online_service" className="w-5 h-5 rounded accent-purple"/>
            <span className="flex justify-between w-full">
              <span className="flex flex-col pl-4">
                <span className="block font-medium text-blue-dark">Online Service</span>
                <span className="flex items-center mt-1 text-xs text-grey-dark">Access to multiplayer games</span>
              </span>
              <span className="flex items-center text-xs text-purple">
                +$1/mo
              </span>
            </span>
          </label>
        </div>
      </fieldset>
    </>
  )
}

export { PickAddOns }
