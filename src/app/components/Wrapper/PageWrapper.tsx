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
    if (isEmpty(modal)) {
      setModalOpen(false);

      // hack - avoid layout shift
      document.body.style.overflow = "auto";
      document.body.style.marginRight = "0";
      document.getElementById("navigation-bar")!.style.marginRight = "0";
    }

    if (!isEmpty(modal)) {
      setModalOpen(true);
      setModalProps({ ...modal });

      // hack - avoid layout shift
      document.getElementById("navigation-bar")!.style.marginRight = "6px";
      document.body.style.overflow = "hidden";
      document.body.style.marginRight = "6px";
    }
  };

  return (
    <PageWrapperContext.Provider
      value={{
        toggleModal,
        isModalOpen,
        modalContent: modalProps?.props,
        props: modalProps,
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
