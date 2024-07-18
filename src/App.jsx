import { Route, Routes } from "react-router-dom";
import "./App.css";
import Signup from "./components/Signup";
import Login from "./components/Login";
import QuestionPanel from "./components/QuestionPanel";
import { UserContext } from "./contexts/userContext";
import { useState } from "react";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <>
      <UserContext.Provider value={(isLogin, setIsLogin)}>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user/quiz" element={<QuestionPanel />} />
        </Routes>
      </UserContext.Provider>
    </>
  );
}

export default App;
