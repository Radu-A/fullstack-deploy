import { useEffect, useState } from "react";
import "./App.css";
import ProviderCard from "./components/ProviderCard";

function App() {
  const [providersList, setProvidersList] = useState;

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("http://localhost:3000/");
        const data = await response.json();
        setProvidersList(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <>
      <h1>Providers</h1>
      {providersList && <p>Hello</p>}
    </>
  );
}

export default App;
