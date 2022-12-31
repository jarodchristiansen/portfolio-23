import Link from "next/link";
import HeaderBar from "./headerBar";

import { createGlobalStyle } from "styled-components";
import Footer from "./footer";

export const GlobalStyle = createGlobalStyle`
/* .App {
  text-align: center;
}

html, body {
  top: 0;
  margin: 0;
  width: auto;
  display: flex;
  min-height: 95vh;
  font-family: 'Fira Code', monospace;
  flex-direction: column;
} */
`;

const Layout = ({ children }) => {
  return (
    <div>
      <GlobalStyle />
      <HeaderBar />
      {children}

      <Footer />
    </div>
  );
};

export default Layout;
