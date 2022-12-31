import HeaderBar from "./headerBar";

import { createGlobalStyle } from "styled-components";
import Footer from "./footer";

export const GlobalStyle = createGlobalStyle`
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
