import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAppDispatch } from "../../store/store";
import { User, postUser } from "../../store/tools/UserSlice";

const MainDiv2 = styled.div`
  display: flex;
  justify-content: center;
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

const Registration = () => {
  const [name, setName] = useState("");
  const [login, setLogin] = useState("");
  const [img, setImg] = useState("");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const postreq = () => {
    if (name !== "" || login !== "") {
      const newData = {
        name,
        login,
      };

      dispatch(postUser(newData));
      navigate("/login");
    } else {
      navigate("/login");
    }
  };
  const Button = styled.button`
    background-color: white;
    color: #008ecc;
    border: none;
    font-size: 20px;
  `;
  const Img = styled.img`
    width: 300px;
    height: 50px;
  `;

  return (
    <MainDiv2>
      <MainDiv>
        <Img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Trello-logo-blue.svg/1920px-Trello-logo-blue.svg.png"
          alt=""
        />
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="write your name"
        />
        <Input
          type="text"
          value={login}
          placeholder="write the login"
          onChange={(e) => setLogin(e.target.value)}
        />
        <Input
          type="text"
          value={img}
          placeholder="your photo"
          onChange={(e) => setImg(e.target.value)}
        />
        <Button onClick={postreq}>далее</Button>
      </MainDiv>
    </MainDiv2>
  );
};

export default Registration;
