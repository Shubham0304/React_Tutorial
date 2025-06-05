import './App.css';
import {Planet} from "./Planet"



function App() {
const Planets = [
    {name: "Mercury", isGasPlanet: false},
    {name: "Venus", isGasPlanet: false},
    {name: "Earth", isGasPlanet: false},
    {name: "Mars", isGasPlanet: false},
    {name: "Jupiter", isGasPlanet: true},
    {name: "Neptune", isGasPlanet: true},
    {name: "Uranus", isGasPlanet: true},
    {name: "Saturn", isGasPlanet: true}
];
return ( <div className="App">
{Planets.map((planet,key) => {
    // if (planet.isGasPlanet) { return <Planet name={planet.name} key={key}></Planet> }

    //Other way:
   return planet.isGasPlanet ? <Planet name={planet.name} key={key} /> : null
})}

</div>
);


}

export default App;
