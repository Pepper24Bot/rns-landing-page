// "use client";

import React, { useContext } from "react";
import {
  CancelBtn,
  CloseBtn,
  ConfirmBtn,
  Container,
  Content,
  DownloadBtn,
  Footer,
  Header,
  Modal,
  ModalContainer,
  Title,
} from "./StyledModal";
import { PageWrapperContext } from "../../Wrapper/PageWrapper";
import { Flex } from "../StyledGlobal";

import Image from "next/image";

export const GenericModal: React.FC = () => {
  const { toggleModal, isModalOpen, props, modalContent } =
    useContext(PageWrapperContext);

  // TODO: Clean this
  const handleConfirmation = async () => {
    if (props?.confirmAction) {
      await props?.confirmAction();
      toggleModal();
    }
  };

  return isModalOpen ? (
    <Container>
      <ModalContainer>
        <Modal>
          <Header>
            <Flex>
              <Image
                src="/images/rns-2.svg"
                alt="RNS Icon"
                width={46}
                height={20}
                style={{ opacity: 0.5, margin: "4px 10px 0 0" }}
              />
              <Title>{props?.title}</Title>
            </Flex>
            <CloseBtn
              onClick={(event) => {
                toggleModal();
                event.preventDefault();
                event.stopPropagation();
              }}
            >
              <i className="fa-regular fa-x lg" style={{ opacity: 0.5 }} />
            </CloseBtn>
          </Header>
          {isModalOpen ? <Content>{modalContent}</Content> : <></>}
          <Footer>
            <DownloadBtn href={props?.downloadFile} download>
              <i
                className="fa-solid fa-file-pdf"
                style={{ color: "#c2185b", marginRight: "8px" }}
              />
              Download
            </DownloadBtn>
            <div>
              {!props?.disableCancel && (
                <CancelBtn
                  onClick={() => {
                    return toggleModal();
                  }}
                >
                  {props?.cancelBtnLabel}
                </CancelBtn>
              )}
              {props?.confirmAction && (
                <ConfirmBtn
                  onClick={(event) => {
                    event.stopPropagation();
                    return handleConfirmation();
                  }}
                >
                  {props?.confirmBtnLabel}
                </ConfirmBtn>
              )}
            </div>
          </Footer>
        </Modal>
      </ModalContainer>
    </Container>
  ) : (
    <></>
  );
};

export default GenericModal;
