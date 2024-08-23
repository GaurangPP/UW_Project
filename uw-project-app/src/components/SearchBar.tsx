import React, {useEffect, useState} from 'react'
import {FaSearch} from 'react-icons/fa'
import './SearchBar.css'
import axios from 'axios'

export const SearchBar = ({setResults}:{setResults: React.Dispatch<React.SetStateAction<any[]>>}) => {

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  /*
  const fetchData = (value: any) => {
    fetch("https://jsonplaceholder.typicode.com/users").then((response: Response) => response.json()).then((json) => {
      const results = json.filter((user: any) => {
        return value && user && user.name && user.name.toLowerCase().includes(value.toLowerCase());
      });
      setResults(results);
    });
  }
    */

  
    const fetchData = async (value: any) => {
      try {
        
        const response = await axios.get("api/student/v5/course/", {
          params: {
            year: '2024',
            quarter: 'autumn',
            curriculum_abbreviation: 'cse',
            page_size: '500',
          },
          headers: {
            "Authorization": "Bearer D65C8B83-BF85-45E6-AEB6-27F3100190DF",
            "Accept": "application/json",
            "x-uw-act-as": "gaurap",
          },
        });

        const allCourses = response.data.Courses;

        console.log(allCourses)
        
        const results = allCourses.filter((course: any) => {
          const name = course.CurriculumAbbreviation + " " + course.CourseNumber + " " + course.CourseTitleLong;
          return value && course && name && name.toLowerCase().includes(value.toLowerCase());
        });

        
        
        
        setResults(results);
        
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };
  

  if(error){
    console.log(error);
  }
  if(loading){
    console.log(loading);
  }



  const handleChange = (value: any) => {
    setInput(value);
    fetchData(value);
  }

  return (
    <div className='input-wrapper'>
    <FaSearch id='search-icon'></FaSearch>
    <input placeholder='Type to search...' type="text" value={input} onChange={(e) => handleChange(e.target.value)}/>
    </div>
  )
}
