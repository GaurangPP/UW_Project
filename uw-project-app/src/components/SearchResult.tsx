import React, { useState } from 'react'
import './SearchResult.css'
import axios from 'axios';

export const SearchResult = ({result, setDescription}:{result:any, setDescription:  React.Dispatch<React.SetStateAction<String>>}) => {

    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchData = async (result: any) => {
        try {
          const res = await axios.get("api/student/v5/course/", {
            params: {
              year: '2024',
              quarter: 'autumn',
              curriculum_abbreviation: result.CurriculumAbbreviation,
              course_number: result.CourseNumber,
            },
            headers: {
              "Authorization": "Bearer D65C8B83-BF85-45E6-AEB6-27F3100190DF",
              "Accept": "application/json",
              "x-uw-act-as": "gaurap",
            },
          });
          console.log(res.data.Courses[0].Href)
          console.log(`api${res.data.Courses[0].Href}`)
          const response = await axios.get(`api${res.data.Courses[0].Href}`, {
            params: {
                
              },
              headers: {
                "Authorization": "Bearer D65C8B83-BF85-45E6-AEB6-27F3100190DF",
                "Accept": "application/json",
                "x-uw-act-as": "gaurap",
              },
            });
          
          console.log(response.data.CourseDescription);
          setDescription(response.data.CourseDescription);
          
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

  const onClick = () => {
    fetchData(result);
  }

  const course = result.CurriculumAbbreviation + " " + result.CourseNumber + " - " + result.CourseTitleLong;

  return (
    <div className='search-result' onClick={onClick}>
        {course}
    </div>
  )
}
