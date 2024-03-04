import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { getUser } from "../../store/tools/UserSlice";

const MainDiv2 = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 550px;
  border: 1px solid gray;
  gap: 40px;
  background: white;
`;

const Input = styled.input`
  width: 300px;
  height: 40px;
  border: 2px solid #008ecc;
  border-radius: 5px;
  background-color: white;
  color: black;

  &::placeholder {
    color: gray;
    padding: 10px;
  }
`;
const Img = styled.img`
  width: 300px;
  height: 50px;
`;
const Button = styled.button`
  background-color: white;
  color: #008ecc;
  border: none;
  font-size: 20px;
`;

const LoginPage = () => {
  const [name, setName] = useState("");
  const [login, setLogin] = useState("");
  const dispatch = useAppDispatch();

  const user = useAppSelector((state) => state.UserRender.user);
  console.log(user);

  const getReq = () => {
    const findUder = user.find(
      (item) => item.name === name && +item.login === +login
    );
    
    if (findUder) {
      navigate("/"); 
      localStorage.setItem("isAuth", "" + findUder._id);
    } else {
      alert("iljn;n");
    }
  };
  

  const Singn_in = () => {
    navigate("/registration");
  };

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const navigate = useNavigate();

  return (
    <MainDiv2>
      <MainDiv>
        <Img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Trello-logo-blue.svg/1920px-Trello-logo-blue.svg.png"
          alt=""
        />
        <Input
          placeholder="write your name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="write the login"
          type="text"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
        <Button onClick={getReq}>далее</Button>
        <Button onClick={Singn_in}>зарегистрироваться</Button>
      </MainDiv>
    </MainDiv2>
  );
};

export default LoginPage;
