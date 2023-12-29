import React from 'react'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import './App.css'
import { SongList } from './components/SongList'

function App() {
  const client = new ApolloClient({
    uri: 'http://localhost:4000/',
    cache: new InMemoryCache(),
  });
  
  return (
    <>
      <ApolloProvider client={client}>
        <SongList />
      </ApolloProvider>
      
    </>
  )
}

export default App
