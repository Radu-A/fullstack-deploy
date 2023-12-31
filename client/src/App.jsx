import { useEffect, useState } from "react";
import "./App.css";
import ProviderCard from "./components/ProviderCard";

function App() {
  const [providersList, setProvidersList] = useState(null);

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
      <section className="provider-title-section">
        <h1>Providers</h1>
      </section>
      <section className="provider-list-section">
        {providersList &&
          providersList.map((provider, i) => {
            return <ProviderCard key={i} provider={provider} />;
          })}
      </section>
    </>
  );
}

export default App;
