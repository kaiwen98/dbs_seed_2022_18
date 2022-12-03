import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import NewTransactions from "./Pages/NewTransactions";

function App() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Homepage></Homepage>}></Route>
        <Route
          path="/newTrans"
          element={<NewTransactions/>}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
