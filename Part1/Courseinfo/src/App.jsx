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
const Header = () => {
  const course = 'Half Stack application development'

  return(
    <div> 
      <h1>
        {course}
      </h1>
    </div>
  )
}

// const Content = ({part, exercises}) => {
//   return(
//     <> 
//       {part.map((parts, index) => (
//         <p> 
//             {part[index]} {exercises[index]}
//         </p>
//       ))}
//     </>
//   );
// }

const Content = ({part, exercises}) => {
  return(
    <> 
        <p> 
            {part[0]} {exercises[0]}
        </p>
        <p> 
            {part[1]} {exercises[1]}
        </p>
        <p> 
            {part[2]} {exercises[2]}
        </p>
    </>
  );
}


const Total = ({values}) => {
  
  let total = 0
  {values.forEach(value => {total+=value}) }
  
  return(

    <p> Number of exercises: {total}</p>
      
  )
}


const App = () => {
  
  const partName = ['Fundamentals of React', 'Using props to pass data', 'State of a component']
  const exercises = [10, 7, 14]

  return (
    <>
      <Header/>
      <Content part = {partName} exercises = {exercises} />
      <Total values = {exercises} />
    </>
  )
}

export default App