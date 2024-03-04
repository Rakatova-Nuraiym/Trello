import Header from "./header/Header";
import Footer from "./footer/Footer";
import styled from "styled-components";
import HomePage from "../../pages/HomePage/HomePage";

const LayoutStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  background: url("https://sportishka.com/uploads/posts/2022-03/1646171118_2-sportishka-com-p-gornii-khrebet-ala-too-turizm-krasivo-foto-2.jpg")
    no-repeat center/cover;
   
`;
const Layout = () => {
  return (
    <LayoutStyle>
      <Header />
      <main>
        <HomePage />
      </main>
      <Footer />
    </LayoutStyle>
  );
};

export default Layout;
