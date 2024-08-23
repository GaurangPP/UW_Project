import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import { SearchBar } from './components/SearchBar'
import { SearchResults } from './components/SearchResults';
import { SearchDescription } from './components/SearchDescription';



function App() {

  const [results, setResults] = useState<any[]>([]);
  const [description, setDescription] = useState<String>("");

  return (
    <div className='App'>
      <div className='search-bar-container'>
        <img src="images/University-of-Washington-Logo.png" alt="UW Search" height="176" width="256"/>
        <SearchBar setResults = {setResults}></SearchBar>
        <SearchResults results={results} setDescription = {setDescription}></SearchResults>
        <SearchDescription description={description}></SearchDescription>
      </div>
    </div>
  )
}

export default App
