import React, { useContext } from "react";
import { Container, ModalContainer } from "./StyledModal";
import { PageWrapperContext } from "../../Wrapper/PageWrapper";

export const GenericModal: React.FC = () => {
  const { toggleModal, isModalOpen, props, modalContent } =
    useContext(PageWrapperContext);

  if (isModalOpen) {
    console.log("Modal Open!");
  }

  return isModalOpen ? (
    <Container
      onClick={(event) => {
        toggleModal();
        event.preventDefault();
        event.stopPropagation();
      }}
    >
      <ModalContainer>{modalContent}</ModalContainer>
    </Container>
  ) : (
    <></>
  );
};

export default GenericModal;
