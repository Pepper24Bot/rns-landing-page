"use client";

import React, { useState } from "react";
import { pdfjs, Document, Page } from "react-pdf";
import {
  ButtonLabel,
  Content,
  PageLabel,
  PageSteps,
  PdfContainer,
} from "./StyledPolicyAndTerms";

import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import { FlexCenter } from "../../StyledGlobal";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const options = {
  standardFontDataUrl: "/standard_fonts/",
};

interface PolicyAndTerms {
  type: "Policy" | "Terms";
}

export const PolicyAndTerms: React.FC<PolicyAndTerms> = (
  props: PolicyAndTerms
) => {
  const { type } = props;

  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);

  const onDocumentLoadSuccess = ({ numPages }: any) => {
    setNumPages(numPages);
  };

  const changePage = (offset: number) => {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  };

  const previousPage = () => {
    changePage(-1);
  };

  const nextPage = () => {
    changePage(1);
  };

  const getFileName = () => {
    switch (type) {
      case "Policy":
        return "/documents/rns-privacy-view.pdf";
      case "Terms":
        return "/documents/rns-terms-view.pdf";
      default:
        return "";
    }
  };

  const getHref = (url: string) => {
    if (url.toLocaleLowerCase() === "support@rootnameservice.com") {
      return "mailto:support@rootnameservice.com";
    } else {
      return url;
    }
  };

  const getTextRenderer = (options: any) => {
    const text = options.str;
    const height = options.height;

    // TODO: Enable case insensitivity
    // (?i:.rootnameservice.com) -- fix this
    const pattern = new RegExp(
      /(?:.ROOTNAMESERVICE.COM|.rootnameservice.com)/g
    );

    // this means it is a header
    if (height > 12) {
      return `<span class="custom_heading">${text}</span>`;
    } else if (text.match(pattern)) {
      return `
        <a class="custom-link" href="${getHref(text)}" target="_blank">
          <span class="custom_span">${text}</span>
        </a>
      `;
    } else {
      return `<span>${text}</span>`;
    }
  };

  return (
    <PdfContainer>
      <div className="document-container">
        <Content>
          <Document
            file={getFileName()}
            onLoadSuccess={onDocumentLoadSuccess}
            options={options}
            renderMode="canvas"
          >
            <Page
              pageNumber={pageNumber}
              renderAnnotationLayer={false} // creating a custom annotation
              canvasBackground="transparent"
              customTextRenderer={(options) => {
                return getTextRenderer(options);
              }}
            />
          </Document>
        </Content>
        <FlexCenter>
          <PageSteps>
            <button
              type="button"
              disabled={pageNumber <= 1}
              onClick={previousPage}
            >
              <ButtonLabel isDisabled={pageNumber <= 1}>Previous</ButtonLabel>
            </button>
            <PageLabel>
              Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
            </PageLabel>
            <button
              type="button"
              disabled={pageNumber >= numPages}
              onClick={nextPage}
            >
              <ButtonLabel isDisabled={pageNumber >= numPages}>
                Next
              </ButtonLabel>
            </button>
          </PageSteps>
        </FlexCenter>
      </div>
    </PdfContainer>
  );
};

export default PolicyAndTerms;
