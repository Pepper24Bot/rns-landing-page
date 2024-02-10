import React, { useContext } from "react";
import {
  Container,
  Footer,
  Header,
  Modal,
  ModalContainer,
  Title,
} from "./StyledModal";
import { PageWrapperContext } from "../../Wrapper/PageWrapper";

import Image from "next/image";

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
      <ModalContainer>
        <Modal>
          <Header>
            <Image
              src="/images/rns-2.svg"
              alt="RNS Icon"
              width={46}
              height={20}
              style={{ opacity: 0.5, margin: "4px 10px 0 0" }}
            />
            <Title>{props?.title}</Title>
          </Header>
          {modalContent}
          <Footer>Footer</Footer>
        </Modal>
      </ModalContainer>
    </Container>
  ) : (
    <></>
  );
};

export default GenericModal;
