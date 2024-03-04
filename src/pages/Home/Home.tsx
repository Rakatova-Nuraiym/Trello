/* eslint-disable @typescript-eslint/no-explicit-any */
import scss from "./home.module.scss";
import { useAppDispatch, useAppSelector } from "../../store/store";
import {
  patchTrello,
  getTrello,
  postTrello,
  putTrello,
  patchComment,
} from "../../store/tools/TrelloSlice";
import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
// import { NewDataProps } from "../../type";
import {
  ButtonD,
  EditDiv,
  Inputs,
  MainDiv,
  Menu,
  MiniDiv,
  NameDiv,
  NavDiv,
  NewNav,
  TitleDiv,
} from "./HomeStyle";
import Modal from "./Modal/Modal";
// import { TypePatchArray } from "../../type";

interface NewItem {
  title: string;
  _id: number;
}

// interface Trello {

//   name: string;
//   values: [
//     {
//       title: string;
//       _id: number;
//       newComment: [
//         {
//           comment: string;
//           _id: number;
//         }
//       ];
//     }
//   ];
// }

const Home = () => {
  const todo = useAppSelector((state) => state.TrelloSlice.todo);

  const dispatch = useAppDispatch();
  const [test, setTest] = useState<boolean | number>(false);

  // ! useStatesx
  const [value, setValue] = useState("");
  const [titleInput, setTitle] = useState("");
  // const [editTitle, setEditTitle] = useState("");
  // const [show, setShow] = useState(false);
  const [edit, setEdit] = useState<null | number>(null);
  const [editValue, setEditValue] = useState("");
  const [addTest, setEddTest] = useState(false);
  const [comment, setComment] = useState("");
  // const [addTest, setEddTest] = useState(false);

  const navigate = useNavigate();

  const [modal, setModal] = useState(false);
  const [modalOpen, setOpenModal] = useState<null | number>(null);

  const openModal = () => {
    setModal(true);
  };

  const CloseModal = () => {
    setOpenModal(null);
    setModal(false);
    console.log("eferg");
  };
  // ! post
  const postReq = () => {
    if (value !== "") {
      const newData = {
        name: value,
        values: [],
      };
      dispatch(postTrello(newData));
      CloseAddInput();
      setValue("");
    }
  };
  // ! get
  useEffect(() => {
    dispatch(getTrello());
  }, [dispatch]);

  // ! patch
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const addTitle = (_id: number, name: string, item: any) => {
    if (titleInput !== "") {
      const newData = {
        name: name,
        values: [
          ...item.values,
          {
            title: titleInput,
            _id: Math.random(),
            newComment: [],
          },
        ],
      };
      dispatch(patchTrello({ newData, _id }));
      setTitle("");
      setTest(false);
    }
  };

  const testingFunc = (_id: number) => {
    setTest(_id);
  };
  const closeInput = () => {
    setTest(false);
  };

  const update = (newItem: NewItem) => {
    setEditValue(newItem.title);
    setEdit(newItem._id);
  };

  const editFunc = (
    _id: number,
    name: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    values: any,
    id: number
  ) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const newValues = values.map((el: any) => {
      if (el._id !== id) {
        return el;
      }

      return { title: editValue, _id: el._id, newComment: [] };
    });
    console.log(newValues, "newValues");

    const newData = {
      name,
      values: newValues,
    };
    dispatch(putTrello({ newData, _id }));

    setEdit(null);
  };

  const Exit = () => {
    localStorage.removeItem("isAuth");
    navigate("/login");
  };

  const ShowEddInput = () => {
    setEddTest(true);
  };
  const CloseAddInput = () => {
    setEddTest(false);
  };

  const addComment = (
    _id: number,
    name: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    item: any,
    title: string,
    newItem: any
  ) => {
    const newData = {
      name: name,
      values: [
        ...item.values,
        {
          title,
          newComment: [
            ...newItem.newComment,
            {
              // comment,
              comment: comment,
              _id: Math.random(),
            },
          ],
        },
      ],
    };
    dispatch(patchComment({ newData, _id }));
    setModal(false);
  };

  return (
    <div>
      <NewNav>
        <NavDiv>
          <h3>JS 12</h3>
          <h3>для рабочего прстранства</h3>
          <button> По доске</button>
        </NavDiv>
        <NavDiv>
          <h3>Улучшения</h3>
          <h3>Автоматизация</h3>
          <h3>Фильтры</h3>
        </NavDiv>
      </NewNav>
      <div className={scss.mainDiv}>
        <div>
          <Menu>
            <p> Рабочеее ространство</p>
            <p>Мои доски</p>
          </Menu>
        </div>
        <div>
          <MainDiv>
            {todo.map((item) => (
              <MiniDiv key={item._id}>
                <NameDiv>{item.name}</NameDiv>
                {item.values.map((newItem) => {
                  return (
                    <EditDiv key={item._id}>
                      {edit === newItem._id ? (
                        <>
                          <Inputs
                            type="text"
                            value={editValue}
                            onChange={(e) => setEditValue(e.target.value)}
                          />
                          <button
                            onClick={() =>
                              editFunc(
                                item._id,
                                item.name,
                                item.values,
                                newItem._id
                              )
                            }
                          >
                            save
                          </button>
                        </>
                      ) : (
                        <>
                          <TitleDiv
                            onClick={() => {
                              openModal();
                              setOpenModal(newItem._id);
                            }}
                          >
                            {newItem.title}

                            {modalOpen === newItem._id ? (
                              <>
                                <Modal isOpen={modal}>
                                  <div>
                                    <div>
                                      {newItem.newComment.map((el) => (
                                        <div>
                                          <p>{el.comment}</p>
                                        </div>
                                      ))}
                                    </div>

                                    <Inputs
                                      type="text"
                                      value={comment}
                                      onChange={(e) =>
                                        setComment(e.target.value)
                                      }
                                    />
                                    <button onClick={CloseModal}>close</button>
                                    <button
                                      onClick={() =>
                                        addComment(
                                          item._id,
                                          item.name,
                                          item,
                                          newItem.title,
                                          newItem
                                        )
                                      }
                                    >
                                      add comment
                                    </button>
                                  </div>
                                </Modal>
                              </>
                            ) : null}
                          </TitleDiv>
                          <button
                            onClick={() => {
                              update(newItem);
                              setEdit(newItem._id);
                            }}
                          >
                            edit
                          </button>
                        </>
                      )}
                    </EditDiv>
                  );
                })}

                {test === item._id ? (
                  <>
                    <Inputs
                      type="text"
                      value={titleInput}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                    <button
                      onClick={() => {
                        addTitle(item._id, item.name, item);
                      }}
                    >
                      add
                    </button>
                    <button onClick={closeInput}>X</button>
                  </>
                ) : null}
                <ButtonD
                  onClick={() => {
                    testingFunc(item._id);
                  }}
                >
                  <span>+</span>
                  <span>добавить карточку</span>
                </ButtonD>
              </MiniDiv>
            ))}

            <button onClick={ShowEddInput}>Добавить еще одну колонку</button>
          </MainDiv>
          {addTest ? (
            <>
              <Inputs
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <button onClick={postReq}>add</button>
              <button onClick={CloseAddInput}>X</button>
            </>
          ) : null}

          <button onClick={Exit}>Exit</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
