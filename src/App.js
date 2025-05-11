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
    <User/>
    </div>
  );
}

const getName = () => {
  return "Shubham"
}

const GetNameComponent = () => {
  return <h1> Shubham </h1>
}


const User = () => {
 return (
    <div>
      <h1>Shubham</h1>
      <h1>31</h1>
      <h1>shubhamjoshi0304@gmail.com</h1>



    </div>
 )

}
export default App;
