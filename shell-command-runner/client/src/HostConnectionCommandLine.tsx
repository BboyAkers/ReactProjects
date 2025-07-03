import { FormEvent } from 'react';

const HostConnectionCommandLine = ({
  submitCommand,
  output,
}: {
  submitCommand: (command: string) => Promise<unknown>;
  output: string;
}) => {
  const submitCommandForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // @ts-expect-error This is valid and works
    const command = (event.target as HTMLFormElement).elements[0].value;
     await submitCommand(command);

  }
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <form
        onSubmit={submitCommandForm}
        className="grid grid-cols-1 space-y-3 md:space-y-0 md:grid-cols-6 md:space-x-2 w-full justify-center items-center"
      >
        <input
          type="text"
          name="command"
          id="command"
          placeholder="Type a command"
          className="px-4 py-2 rounded md:col-span-4 bg-white-dark dark:bg-navyBlue"
        />
        <button
          type="submit"
          className="px-4 py-2 font-semibold w-full md:col-span-2 text-white bg-blue rounded hover:bg-blue-dark hover:border-blue border-blue border-2"
        >
          Run Command
        </button>
      </form>

      <p className="text-gray-400 text-sm mt-4">{output}</p>
    </div>
  );
};

export default HostConnectionCommandLine;
