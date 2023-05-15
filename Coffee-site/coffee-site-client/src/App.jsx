import { useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./components/CoffeeCard";

function App() {
  const coffees = useLoaderData();
  return (
    <div className="m-20 p-12 ">
      <h1 className="text-5xl font-bold text-amber-900 text-center">
        Get Your Coffee From Here: {coffees.length}
      </h1>

      <div className="grid md:grid-cols-2 gap-5">
        {coffees.map((coffee) => (
          <div key={coffee._id}>
            <CoffeeCard coffee={coffee} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
