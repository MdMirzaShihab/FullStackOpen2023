// const App = () => {
//   const course = 'Half Stack application development'
//   const part1 = 'Fundamentals of React'
//   const exercises1 = 10
//   const part2 = 'Using props to pass data'
//   const exercises2 = 7
//   const part3 = 'State of a component'
//   const exercises3 = 14

//   return (
//     <div>
//       <h1>{course}</h1>
//       <p>
//         {part1} {exercises1}
//       </p>
//       <p>
//         {part2} {exercises2}
//       </p>
//       <p>
//         {part3} {exercises3}
//       </p>
//       <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
//     </div>
//   )
// }
const Header = ({course}) => {
  console.log(course.name)

  return(
      <h1>
        {course.name}
      </h1>
  )
}

const Content = ({course}) => {
  console.log(course.parts)
  
  return(
    <> 
        <p>{course.parts[0].name} {course.parts[0].exercises}</p> 
        <p>{course.parts[1].name} {course.parts[2].exercises}</p> 
        <p>{course.parts[2].name} {course.parts[2].exercises}</p> 
    </>
  )
}


const Total = ({course}) => {
  
  
  const sum = course.parts.reduce((accumulator, part) => accumulator + part.exercises, 0);
  
  console.log(sum)

  return(
    <> 
    
    <p> Number of exercises {sum}</p>
      
    </>
  )
}


const App = () => {
  

  // const parts = ['Fundamentals of React', 'Using props to pass data', 'State of a component']
  // const exercises = [10, 7, 14]
  // const part1 = 'Fundamentals of React'
  // const exercises1 = 10
  // const part2 = 'Using props to pass data'
  // const exercises2 = 7
  // const part3 = 'State of a component'
  // const exercises3 = 14
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  // const exercisesArray = parts.map(part =      <Total course = {course} />> part.exercises);

// console.log(exercisesArray)


  return (
    <>
      <Header course = {course}/>
      <Content course = {course} />
      <Total course = {course} />
    </>
  )
}

export default App