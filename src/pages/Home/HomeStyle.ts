import styled from "styled-components";

// ! styled
export const Menu = styled.header`
  position: relative;
  padding-block: 20px;
  background-color: #2d2c2c;
  bottom: 80px;
  width: 300px;
  height: auto;
  height: 80vh;
  background-color: #2c2c2c;
  opacity: 90%;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 10px;
`;
export const MainDiv = styled.header`
  display: flex;
  align-items: center;
  gap: 30px;
  flex-wrap: wrap;
`;
export const MiniDiv = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  gap: 20px;
  border: 1px solid gray;
  height: auto;
  background-color: black;
  border-radius: 20px;
`;
export const TitleDiv = styled.h1`
  background-color: #2c2c2c;
  width: 250px;
  height: 30px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding-left: 12px;
  font-size: 20px;
  font-weight: 300;
`;
export const ButtonD = styled.button`
  border: none;
  background-color: black;
  display: flex;
  justify-content: space-around;
  width: 280px;
  /* span{
    font-size: 20px;
  } */
`;
export const NameDiv = styled.h1`
  color: #a29e9e;
  font-size: 22px;
`;
export const EditDiv = styled.div`
  display: flex;
`;
export const Inputs = styled.input`
  width: 250px;
  height: 35px;
`;

export const NewNav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding-right: 20px;
  opacity: 70%;
  background-color: #2c2c2c;
  padding-block: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 400px;
  button {
    width: 100px;
    height: 30px;
  }
`;

export const NavDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

export const ModalDiv = styled.div`
  display: flex;
  top: 0;
  left: 0;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.3);
`;
