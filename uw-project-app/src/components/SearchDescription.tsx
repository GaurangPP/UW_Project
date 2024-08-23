import React from 'react'
import './SearchDescription.css'

export const SearchDescription = ({description}:{description:String}) => {
  return (
    <div className='search-description'>
        {description}
    </div>
  )
}
