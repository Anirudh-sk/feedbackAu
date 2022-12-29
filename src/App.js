import "./App.css";
import Form from "./Components/Form";

function App() {
  const queryParameters = new URLSearchParams(window.location.search);
  const building = queryParameters.get("building");
  const number = queryParameters.get("number");

  return (
    <>
      <Form />
        {building}
        {number}
    </>
      
  );
}

export default App;
