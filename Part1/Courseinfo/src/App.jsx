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
  console.log(course)

  return(
      <h1>
        {course}
      </h1>
  )
}

const Content = ({parts}) => {
  console.log(parts)
  
  return(
    <> 
        <p>{parts[0].name} {parts[0].exercises}</p> 
        <p>{parts[1].name} {parts[2].exercises}</p> 
        <p>{parts[2].name} {parts[2].exercises}</p> 
    </>
  )
}


const Total = ({parts}) => {
  
  
  const sum = parts.reduce((accumulator, parts) => accumulator + parts.exercises, 0);
  
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
    const course = 'Half Stack application development'
    const parts = [
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
  // const exercisesArray = parts.map(part => part.exercises);

// console.log(exercisesArray)


  return (
    <>
      <Header course = {course}/>
      <Content parts = {parts} />
      <Total parts = {parts} />
    </>
  )
}

export default App