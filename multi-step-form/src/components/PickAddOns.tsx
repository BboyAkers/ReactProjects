import { AddOnItem } from "./AddOnItem"

const PickAddOns = () => {
  return (
    <>
      <h2 className="pb-2 text-2xl font-semibold">Pick add-ons</h2>
      <p className="mb-4 font-light text-grey-dark">Add-ons help enhance your gaming experience.</p>
        <AddOnItem
          title="Online Service"
          subtitle="Access to multiplayer games"
          price={1}
          isAnnualPricing={false} />
        <AddOnItem
          title="Larger storage"
          subtitle="Extra 1TB of cloud save"
          price={2}
          isAnnualPricing={false} />
        <AddOnItem
          title="Customizable profile"
          subtitle="Custom theme on your profile"
          price={2}
          isAnnualPricing={false} />
    </>
  )
}

export { PickAddOns }
