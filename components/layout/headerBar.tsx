import Link from "next/link";
import styled from "styled-components";
import { motion } from "framer-motion";

const HeaderBar = () => {
  return (
    <HeaderContainer>
      <Link href="/">Home</Link>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 1.2rem;
  padding: 1.2rem;
  border-bottom: 1px solid lightgray;

  a {
    color: black;
    font-weight: bold;
    font-size: 1.2rem;

    :hover {
      color: rgb(27, 185, 194);
    }
  }
`;

export default HeaderBar;
