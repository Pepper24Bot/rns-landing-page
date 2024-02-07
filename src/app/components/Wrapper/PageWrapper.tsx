"use client";

import React, { createContext, useState } from "react";
import { Container, Content, Page } from "./StyledWrapper";
import { Modal } from "@/app/global/model";
import { isEmpty } from "lodash";

import PageNavigation from "../Global/Navigation/Header";
import PageFooter from "../Global/Footer/PageFooter";
import PageModal from "../Global/Modal/GenericModal";

export interface WrapperProps {
  children: React.ReactNode;
}

export interface PageContext {
  toggleModal: (props?: Modal) => void;
  isModalOpen: boolean;
  props?: Modal;
  modalContent?: React.ReactNode;
}

export const PageWrapperContext = createContext<PageContext>({
  toggleModal: (props?: Modal) => {},
  isModalOpen: false,
});

export const PageWrapper: React.FC<WrapperProps> = (props: WrapperProps) => {
  // Modal
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [modalProps, setModalProps] = useState<Modal>();

  const toggleModal = (modal?: Modal) => {
    console.log("toggle modal...", isEmpty(modal));
    if (isEmpty(modal)) {
      setModalOpen(false);
      document.body.style.overflow = "unset";
    }

    if (!isEmpty(modal)) {
      setModalOpen(true);
      setModalProps({ ...modal });
      document.body.style.overflow = "hidden";
    }
  };

  return (
    <PageWrapperContext.Provider
      value={{
        toggleModal,
        isModalOpen,
        modalContent: modalProps?.props,
      }}
    >
      <Container>
        <Page>
          <PageNavigation />
          <PageModal />
          <Content>{props.children}</Content>
          <PageFooter />
        </Page>
      </Container>
    </PageWrapperContext.Provider>
  );
};

export default PageWrapper;
