import styled from "styled-components";
import { FaGithub, FaLinkedinIn, FaFile } from "react-icons/fa";
import Link from "next/link";
import { MediaQueries } from "../../styles/MediaQueries";

const Footer = () => {
  return (
    <ContactSection>
      <h5>Contact</h5>

      <div className="socials-container">
        <Link href="" legacyBehavior passHref>
          <a target="#">
            <span>
              <FaGithub size={36} />
            </span>
          </a>
        </Link>

        <Link
          href="https://www.linkedin.com/in/jarod-christiansen/"
          legacyBehavior
          passHref
        >
          <a target="#">
            <span>
              <FaLinkedinIn size={36} />
            </span>
          </a>
        </Link>

        <div>
          <a
            //this will save the file as "your_cv.pdf"
            download="Jarod Christiansen Resume.pdf"
            //put the path of your pdf file
            href="/pdfs/Jarod-Christiansen.pdf"
          >
            <span>
              <FaFile size={36} />
            </span>
          </a>
        </div>
      </div>

      <div className="underline">
        <Underline />
      </div>
    </ContactSection>
  );
};

const ContactSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: center;
  color: white;
  background-color: #4d4b4b;

  h5 {
    font-size: 2rem;
  }

  .socials-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 3rem;
    padding: 1rem;
  }

  a {
    color: white;
    :hover {
      color: rgb(27, 185, 194);
      text-decoration: underline;
    }
  }

  .underline {
    padding: 3rem 0;
    text-align: center;
    justify-content: center;
  }
`;

const Underline = styled.div`
  background-color: #313131;
  color: #313131;
  border-color: #313131;
  height: 3px;
  max-width: 80%;

  margin-left: auto;
  margin-right: auto;

  @media ${MediaQueries.MD} {
    max-width: 40%;
  }
`;

export default Footer;
