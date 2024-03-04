import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import LoginPage from "../Login/LoginPage";
import Registration from "../RegistrationPage/Registration";

const HomePage = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </div>
  );
};

export default HomePage;
