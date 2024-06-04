import { useActionState } from "react";

const updateDetails = async () => {

}

const FormDetails = () => {
  const [error, submitAction, isPending] = useActionState(
    async (previousState, formData) => {
      const error = await updateDetails(formData.get("name"));
      if (error) {
        return error;
      }
      redirect("/path");
      return null;
    },
    null,
  );

  return (
    <>
      <h2 className="pb-2 text-2xl font-semibold">Personal info</h2>
      <p className="mb-4 font-light text-grey-dark">Please provide your name, email address, and phone number.</p>
      <form  action={submitAction}>
        <label className="text-xs text-blue-dark">
          Name
          <input type="text" name="name" placeholder="e.g. Stephen King" className="block h-10 p-4 mb-4 text-base border-2 rounded border-gray w-72" />
        </label>
        <label className="text-xs text-blue-dark">
          Email Address
          <input type="email" name="emailAddress" placeholder="e.g. stephenking@lorem.com" className="block h-10 p-4 mb-4 text-base border-2 rounded border-gray w-72" />
        </label>
        <label className="text-xs text-blue-dark">
          Phone Number
          <input type="email" name="emailAddress" placeholder="e.g. +1 234 567 890" className="block h-10 p-4 mb-4 text-base border-2 rounded border-gray w-72" />
        </label>
        {error}
        <button disabled={isPending}>Submit</button>
      </form>
    </>
  )
}

export { FormDetails };
