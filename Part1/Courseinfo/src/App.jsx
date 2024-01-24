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


  return(
      <h1>
        {course}
      </h1>
  )
}

const Content = ({parts}) => {
  return(
    <> 
        <p>{parts.name} {parts.exercises}</p> 
    </>
  )
}


const Total = ({exercises}) => {
  
  
  const sum = exercises.reduce((accumulator, exercises) => accumulator + exercises, 0);
  
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
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  const exercisesArray = [part1, part2, part3].map(({ exercises }) => exercises);

console.log(exercisesArray)


  return (
    <>
      <Header course = {course}/>
      <Content parts = {part1} />
      <Content parts = {part2} />
      <Content parts = {part3} />
      <Total exercises = {exercisesArray} />
    </>
  )
}

export default App