import React from 'react'
import CoursesSearch from './CoursesSearch'
function Courses({courses}) {
  return (
    <div>
<CoursesSearch/>
      <h1>Courses</h1>

{courses.map((cours)=>{
return <li  className='card' key={cours.id}>

<h3>{cours.title}</h3>
<p>{cours.description}</p>
<p><b> Level : </b>{cours.level}</p>

</li>
})}

    </div>
  )
}

export default Courses