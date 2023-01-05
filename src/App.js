import "./App.css";
import Form from "./Components/Form";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Food from "./Components/Food";
import Security from "./Components/Security";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/food" element={<Food/>}/>
          <Route path="/security" element={<Security/>}/>

          {/* <Form /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
