import Layout from "./components/layout/Layout";
import styled from "styled-components";
function App() {
  const MainDiv = styled.div`
    background: url("http://izhevsk.ru/forums/icons/forum_pictures/007348/7348627.jpg");
  `;
  return (
    <MainDiv>
      <Layout />
    </MainDiv>
  );
}

export default App;
