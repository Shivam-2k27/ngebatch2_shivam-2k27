import { useEffect, useState } from "react";
import "./App.css";
import Countries from "./Countries";

const App = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const Response = await fetch(
          "https://freetestapi.com/api/v1/countries?limit=10"
        );
        const newResponse = await Response.json();
        setCountries(newResponse);
      } catch (error) {
        console.log("Error in fetching Country", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="app">
      <Countries info={countries} />
    </div>
  );
};

export default App;
