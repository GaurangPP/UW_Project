import React from 'react'
import './SearchResults.css';
import { SearchResult } from './SearchResult';

export const SearchResults = ({results, setDescription}:{results: any[], setDescription:  React.Dispatch<React.SetStateAction<String>>}) => {
  return (
    <div className='results-list'>
        {
            results.map((result, id) => {
                return <SearchResult result = {result} key={id} setDescription={setDescription}></SearchResult>;
            })
        }
    </div>
  )
}
