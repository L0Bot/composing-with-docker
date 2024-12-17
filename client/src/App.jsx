import "./App.css";

function App() {
  // const [data, setData] = useState();
  // const [error, setError] = useState();

  // useEffect(() => {
  //   console.log("1");
  //   fetch("http://172.18.0.4:5050/")
  //     .then((response) => {
  //       console.log("2");
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! Status: ${response.status}`);
  //       }
  //       console.log(response.json());
  //       setError(response.json());
  //     })
  //     .then((data) => {
  //       console.log("3");
  //       console.log("Données reçues :", data);
  //       setData(data);
  //     })
  //     .catch((error) => {
  //       console.log("4");
  //       console.error("Erreur lors de la requête :", error);
  //       setError(error);
  //     });
  // }, []);

  return (
    <>
      <p className="read-the-docs">Hello World!</p>
      {/* <p className="read-the-docs">{data}</p> */}
      {/* <p className="read-the-docs">{error}</p> */}
    </>
  );
}

export default App;
