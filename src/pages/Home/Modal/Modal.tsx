import styled from "styled-components";

export const ModalDiv = styled.div`
  display: flex;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const MiniModal = styled.div`
  width: 300px;
  background-color: blueviolet;
  height: 400px;
  padding: 20px;
  display: flex;
  justify-content: center;
  justify-content: center;
  z-index: 3;
`;

const Modal = ({ isOpen, children }) => {
  if (!isOpen) {
    return null;
  }
  return (
    <>
      <ModalDiv>
        <MiniModal>{children}</MiniModal>
      </ModalDiv>
    </>
  );
};

export default Modal;
