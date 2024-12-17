import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("http://localhost:5050/")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setData(data.message);
      })
      .catch((error) => {
        console.error("Erreur lors de la requête :", error);
      });
  }, []);

  return (
    <>
      <p className="read-the-docs">{data}</p>
    </>
  );
}

export default App;
