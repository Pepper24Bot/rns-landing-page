import type { Metadata } from "next";
import { Inter } from "next/font/google";
import PageWrapper from "./components/Wrapper/PageWrapper";

import "./globals.css";
import StyledComponentsRegistry from "./components/Wrapper/StyledComponentRegistry";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export interface LayoutProps {
  children: React.ReactNode;
}

export default function RootLayout(props: LayoutProps) {
  const { children } = props;

  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <PageWrapper>{children}</PageWrapper>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
