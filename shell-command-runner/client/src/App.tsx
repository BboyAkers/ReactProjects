import { FormEvent, lazy, Suspense, useState } from 'react';

type hostConnectionData = {
  isSuccess: boolean;
  token: string;
};
type HostConnectionState = {
  status: 'idle' | 'loading' | 'resolved' | 'rejected';
  data: hostConnectionData | null;
  error: boolean;
};

type commandLineData = {
  command: string;
  token: string;
  output: string;
};

const HostConnectionCommandLine = lazy(
  () => import('./HostConnectionCommandLine')
);

function App() {
  const [isThemeDark, setIsThemeDark] = useState(true);
  const [hostConnectionState, setHostConnectionState] =
    useState<HostConnectionState>({
      status: 'idle',
      data: null,
      error: false,
    });
  const [commandLineData, setCommandLineData] = useState<commandLineData>({
    command: '',
    token: '',
    output: '',
  });

  const submitConnectToServerForm = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    setHostConnectionState({ status: 'loading', data: null, error: false });
    // @ts-expect-error This is valid and works, while you can access the elements via array positioning the dom also provide the element names as well.
    const { username, password, hostname } = (event.target as HTMLFormElement)
      .elements;

    try {
      const response = await fetch('/connect', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username.value,
          password: password.value,
          hostname: hostname.value,
        }),
      });
      const data = await response.json();
      if (data.isSuccess) {
        setHostConnectionState({ status: 'resolved', data, error: false });
        setCommandLineData({ ...commandLineData, token: data.token });
      } else {
        setHostConnectionState({ status: 'rejected', data: null, error: true });
      }
    } catch {
      setHostConnectionState({ status: 'rejected', data: null, error: true });
    }
  };

  const submitCommand = async (command: string) => {
    console.log(command);
    const response = await fetch('/command', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token: commandLineData.token,
        command,
      }),
    });
    const data = await response.json();
    setCommandLineData({ ...commandLineData, output: data.output });
    return data;
  };

  return (
    <main className={`${isThemeDark ? 'dark' : 'light'}`}>
      <div className="flex items-center justify-center h-screen p-6 bg-white-dark dark:bg-navyBlue">
        <div className="w-[40rem]">
          <header>
            <div className="flex justify-between">
              <h1 className="mb-4 font-semibold md:text-2xl text-gray-dark dark:text-white-light">
                Shell Command Runner
              </h1>
              <div>
                <button
                  type="button"
                  id="themeToggleButton"
                  onClick={() => setIsThemeDark(!isThemeDark)}
                  className="text-gray dark:text-white-light"
                >
                  <span>{isThemeDark ? 'Light' : 'Dark'}</span>
                  <img
                    id="themeIcon"
                    className="inline ml-2"
                    src={
                      isThemeDark
                        ? 'https://imagedelivery.net/nGYhisqu4x6SCDrz5V8Qxg/65039011-9dbc-407d-b804-43fdceffa800/public'
                        : 'https://imagedelivery.net/nGYhisqu4x6SCDrz5V8Qxg/d2b6ea90-c9cc-492d-108a-7c97152d7100/public'
                    }
                    alt="Theme Icon"
                  />
                </button>
              </div>
            </div>
            <form
              onSubmit={submitConnectToServerForm}
              id="connectToServerForm"
              className="w-full p-4 bg-white shadow-lg dark:bg-blue-dark rounded-2xl text-white"
              method="POST"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 md:flex-row space-y-3 md:space-y-0 md:space-x-3">
                <input
                  required
                  type="text"
                  id="username"
                  name="username"
                  className="px-4 py-2 rounded bg-white-dark dark:bg-navyBlue"
                  placeholder="Username"
                />
                <input
                  required
                  type="password"
                  id="password"
                  name="password"
                  className="px-4 py-2 rounded bg-white-dark dark:bg-navyBlue"
                  placeholder="Password"
                />
                <input
                  required
                  type="text"
                  id="hostname"
                  name="hostname"
                  className="px-4 py-2 rounded bg-white-dark dark:bg-navyBlue"
                  placeholder="Hostname"
                />
              </div>
              <button
                type="submit"
                id="connectButton"
                className="px-4 py-2 font-semibold w-full mt-6 text-white bg-blue rounded hover:bg-blue-dark hover:border-blue border-blue border-2"
              >
                Connect
              </button>
              {hostConnectionState.error ? (
                <p id="errorMessage" className="text-red-600 text-center mt-">
                  Error connecting to server.
                </p>
              ) : null}
            </form>
          </header>
          <section>
            <div
              id="githubUserCard"
              className="max-w-3xl bg-white dark:bg-blue-dark text-blue dark:text-white-light max-h-[600px] rounded-2xl mt-8 p-8 shadow-lg"
            >
              <Suspense fallback={<div>Loading...</div>}>
                {!hostConnectionState.data?.isSuccess ? (
                  <HostConnectionCommandLine
                    output={commandLineData.output}
                    submitCommand={submitCommand}
                  />
                ) : (
                  <p id="statusMessage">Please connect to a server.</p>
                )}
              </Suspense>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

export default App;
