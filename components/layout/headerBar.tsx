import Link from "next/link";
import styled from "styled-components";

const HeaderBar = () => {
  return (
    <HeaderContainer>
      <Link href="/">Home</Link>
      {/* <Link href="/contact">Contact</Link>
      <Link href="/designs">Designs</Link> */}
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  gap: 1.2rem;
  padding: 1.2rem;

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
