import React from 'react'


const Total = (props) =>{
return (
<p>yhteensä {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises} tehtävää</p>
)
}
export default Total