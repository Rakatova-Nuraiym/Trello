import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { useEffect, useState } from "react";
import { getUser } from "../../../store/tools/UserSlice";

const HeaderStyle = styled.header`
  padding-block: 20px;
  background-color: #2d2c2c;
  width: 100%;
`;
const Img = styled.img`
  width: 100px;
`;
const Img2 = styled.img`
  width: 30px;
`;
const Img3 = styled.img`
  width: 70px;
  border-radius: 40px;
`;
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding-right: 20px;
`;

const Ul = styled.ul`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 60px;

  li {
    a {
      color: #cac5c5;
      font-size: 18px;
    }
  }
`;
const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;
const Input = styled.input`
  width: 200px;
  height: 35px;
  border: 1px solid gray;
  border-radius: 6px;
`;
const ShowDiv = styled.div`
  position: absolute;
  width: 260px;
  height: 500px;
  background-color: #2c2c2c;
  right: 0px;
  top: 70px;
  border-radius: 20px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
  gap: 20px;

  div {
    display: flex;
    flex-direction: column;
    gap: 30px;
    p {
      color: #aeabab;
    }
  }
`;

const Header = () => {
  const user = useAppSelector((state) => state.UserRender.user);
  const dispatch = useAppDispatch();
  const [userProfilte, setUserId] = useState("");
  const navigate = useNavigate();

  const [imgDiv, setImgDiv] = useState(false);
  const userId = +localStorage.getItem("isAuth")!;
  const getUserId = () => {
    const find = user.find((item) => item._id === userId);
    console.log(find);

    if (find) {
      console.log(find);
      setUserId(find.img);
    } else {
      console.log("not found");
    }
  };

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  useEffect(() => {
    getUserId();
  }, [user]);

  const Exit = () => {
    localStorage.removeItem("isAuth");
    navigate("/login");
  };
  return (
    <HeaderStyle>
      <Nav>
        <Ul>
          <li>
            <Img
              src="https://assets.website-files.com/5e8b2955eaa7857dbbd850ad/603622d799c60c8fd5bfe629_Trello_logo-p-2600.png"
              alt=""
            />
          </li>
          <li>
            <Link to="#">Рабочие пространство</Link>
          </li>
          <li>
            <Link to="#">Недавние</Link>
          </li>
          <li>
            <Link to="#">В избранном</Link>
          </li>
          <li>
            <Link to="/">Создать</Link>
          </li>
        </Ul>
        <Div>
          <Input type="text" placeholder="поиск" />

          <Img2
            src="https://pngimg.com/uploads/bell/bell_PNG53538.png"
            alt=""
          />
          {userId ? (
            <>
              <Img3
                src={userProfilte}
                alt=""
                onClick={() => setImgDiv(!imgDiv)}
              />
            </>
          ) : null}

          <div>
            {imgDiv ? (
              <ShowDiv>
                <div>
                  <Img3
                    src={userProfilte}
                    alt=""
                    onClick={() => setImgDiv(!imgDiv)}
                  />
                  <p>переключение аккаунтов</p>
                  <p>управление аккаунтом</p>
                </div>

                <div>
                  <p>профиль и доступ</p>
                  <p>действия</p>
                  <p>карточки</p>
                  <p>настройки</p>
                  <p>выбор темы</p>
                  <button onClick={Exit}>выйти</button>
                </div>
              </ShowDiv>
            ) : null}
          </div>
        </Div>
      </Nav>
    </HeaderStyle>
  );
};

export default Header;
