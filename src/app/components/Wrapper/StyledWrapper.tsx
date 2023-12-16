import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  background-color: var(--background-darker);
`;

export const Page = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  min-height: calc(100% - 200px);
  margin: auto;
`;

export const Footer = styled.div`
  background-color: rgba(0, 0, 0, 1);
  border-top: solid 1px var(--secondary);
  height: 125px;
`;
