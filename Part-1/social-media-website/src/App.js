import './App.css';



function App() {
  // const name = "Shubham";
  // const age = <h2> 31 </h2>;
  // const email = <h2>shubhamjoshi0304@gmail.com</h2>
  // const user = (
  //   <div>
  //     {name}
  //     {age}
  //     {email}
  //   </div>
  // );
  return (
    <div className="App"> Hey Man!! These are my details: 
    {/* {user} */}
    <User name="Shubham" age={31} email="shubhamjoshi000304@gmail.com"/>
    <User name="Jake" age={36} email="jakegym@gmail.com"/>
    <User name="Reemi" age={41} email="remi@gmail.com"/>
    <Job salary={30000} position="SDE" company="Amazon"/>
    <Job salary={50000} position="Manager" company="FCL"/>
    <Job salary={89999} position="CEO" company="MFT"/>
    </div>
  );
}

// const getName = () => {
//   return "Shubham"
// }

// const GetNameComponent = () => {
//   return <h1> Shubham </h1>
// }

const User = (props) => {
 return (
    <div style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
      <h1>{props.email}</h1>
    </div>
 )

}

const Job = (props)=> {
  return (
    <div style={{ border: "1px solid blue", margin: "10px", padding: "10px" }}>
      <h2>{props.salary}</h2>
      <h2>{props.position}</h2>
      <h2>{props.company}</h2>
    </div>
  )

}

export default App;
