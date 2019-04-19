import React from 'react'
import Part from "./Part"

const Content = (props) => { 
return (
<>
    <Part part={props.part1} excercises={props.exercises1}/>
    <Part part={props.part2} excercises={props.exercises2}/>
    <Part part={props.part3} excercises={props.exercises3}/>
</>
)
}
export default Content