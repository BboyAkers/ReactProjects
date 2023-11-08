// useEffect: persistent state
// http://localhost:3000/isolated/exercise/02.js

import * as React from 'react'

function useSyncLocalStorageWithState(key, defaultValue = '') {
  const [state, setState] = React.useState(() => window.localStorage.getItem(key) || defaultValue)

  React.useEffect(() => {
    window.localStorage.setItem(key, state)
  }, [key, state])
  return [state, setState]
}

function Greeting({ initialName = '' }) {
  const [name, setName] = useSyncLocalStorageWithState('name', initialName)
  console.log('rendering greeting')
  // 🐨 initialize the state to the value from localStorage
  // 💰 window.localStorage.getItem('name') ?? initialName


  function handleChange(event) {
    setName(event.target.value)
  }
  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

function App() {
  const [count, setCount] = React.useState(0)

  return (
    <>
      <button onClick={() => setCount(previousCount => previousCount + 1)}>
        {count}
      </button>
      <Greeting />
    </>
  )
}

export default App
