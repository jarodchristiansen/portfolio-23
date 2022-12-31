import Head from "next/head";
import styled, { keyframes } from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { MediaQueries } from "../styles/MediaQueries";
import { useMemo, useRef } from "react";
import bg from "../public/svgs/wavy-banner.svg";
import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

export default function Home() {
  const ProjectBlocks = useMemo(() => {
    const projects = [
      {
        title: "HodlWatch",
        techStack:
          "NextJS, Apollo (GraphQL), MongoDB, Next-Auth, Styled-Components, Vercel",
        details:
          "Web3 data aggregation and indicator site. Allows web3 communities to gain insights into digital assets including financial, social, and on-chain metrics. 12,500+ assets, as well as 20+ indicators.",
        imageSource: "/images/cryptoWatch.png",
        liveUrl: "https://hodl-watch.vercel.app/",
        githubUrl: "https://github.com/jarodchristiansen/hodlWatch",
        platform: "Web",
      },

      {
        title: "Algorithm Visualizer",
        techStack: "NextJS, Typescript, Styled-Components, Vercel",
        details:
          "NextJS application designed to illustrate various sorting algorithms with variable speed to illustrate runtime complexity as well as fun data visualizations with Typescript.",
        imageSource: "/images/algo-viz.png",
        liveUrl: "https://algorithm-visualizer-nextjs.vercel.app/",
        githubUrl: "https://github.com/jarodchristiansen/algorithm-visualizer",
        platform: "Web",
      },

      {
        title: "React-Native NFT Marketplace",
        techStack: "React Native, TypeScript, Solidity, IPFS",
        details:
          "React Native NFT explorer application that allows users to view their favorite NFT's, learn more about them, as well as place bids on the NFT itself.",
        imageSource: "/images/react-native-nfts.png",
        liveUrl: "",
        githubUrl:
          "https://github.com/jarodchristiansen/nft-marketplace-react-native",
        platform: "Mobile",
      },

      {
        title: "MoonMarket",
        techStack: "NextJS, Solidity, Hardhat, IPFS, and Open Zeppelin",
        details:
          "ERC721 Marketplace created utilizing Open Zeppelin's ERC721 smart contract. Deployed on Polygon's Mumbai testnet as well as Ethereum's Rinkeby network. Project is intended to serve as basic scaffolding for royalties mechanisms, as well as collections for digital properties.",
        imageSource: "/images/moonmarket.png",
        liveUrl: "https://nft-marketplace-liard.vercel.app/",
        githubUrl:
          "https://github.com/jarodchristiansen/NFT-Marketplace/tree/main/digital-marketplace",
        platform: "Web",
      },

      {
        title: "Web3 Time Series Forecasting",
        techStack: "Python, Pandas, MatplotLib, Numpy, Keras, Prophet",
        details:
          "Predictive model for financial assets utilizing Prophet Model trained to utilize CoinMarketCapAPI and Numpy. Easily extendible to most various assets with historical data. Expansion of LSTM Neural Network to expand accuracy as well as expansion of time series memory.",
        imageSource: "/images/bitcoinProphet.png",
        liveUrl:
          "https://github.com/jarodchristiansen/PythonProjects/blob/master/Bitcoin_Prophet.ipynb",
        githubUrl:
          "https://github.com/jarodchristiansen/PythonProjects/blob/master/Bitcoin_Prophet.ipynb",
        platform: "Web",
      },
    ];

    return projects.map((project, idx) => {
      return (
        <RowContainer key={project.details}>
          <motion.div
            initial={{ opacity: 0, scale: 1, x: -25 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 2, staggerChildren: true }}
            className="change-container"
          >
            <Block>
              <div className="block-text-column">
                <h3>{project.title}</h3>
                <h4>{project.techStack}</h4>
                <span>{project.details}</span>
              </div>

              <div className="button-container">
                {!!project.liveUrl ? (
                  <Link href={project.liveUrl} passHref legacyBehavior>
                    <a target={"#"}>
                      <button className="live-button">See Live</button>
                    </a>
                  </Link>
                ) : (
                  <button className="live-button" disabled>
                    See Live
                  </button>
                )}

                <Link href={project.githubUrl} passHref legacyBehavior>
                  <a target={"#"}>
                    <button className="code-button">Source Code</button>
                  </a>
                </Link>
              </div>
            </Block>

            <ImageBlock>
              <Image
                src={project.imageSource}
                height={350}
                width={400}
                alt={project.title + "Image source"}
                layout="responsive"
                unoptimized={true}
              />

              <HoverDiv isRight>
                <span>{project.platform}</span>
              </HoverDiv>
            </ImageBlock>
          </motion.div>
        </RowContainer>
      );
    });
  }, []);

  const topRef = useRef(null);
  const projectsRef = useRef(null);

  const scrollToProjects = () => {
    projectsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    topRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <PageContainer>
      <Head>
        <title>Jarod Christiansen - Software Engineer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <IntroBanner ref={topRef}>
        <motion.div
          initial={{ opacity: 0, scale: 1, x: -25 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 2, staggerChildren: true }}
          className="text-container"
        >
          <h2>
            <span>
              Hi, My name is
              <span className="name-text">Jarod Christiansen</span> <br />
              I'm a Software Engineer
            </span>
          </h2>

          <button onClick={() => scrollToProjects()}>Learn More</button>
        </motion.div>
      </IntroBanner>

      <AboutMeContainer ref={projectsRef}>
        <motion.div
          initial={{ opacity: 0, scale: 1, y: 25 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 2 }}
          className="image-container"
        >
          <h2>About Me</h2>
        </motion.div>
        <div className="top-text-row">
          <motion.div
            initial={{ opacity: 0, scale: 1, y: 25 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 2 }}
            className="image-container"
          >
            <Image
              src={"/images/profile (2).jpg"}
              layout="fill"
              className={"image"}
              unoptimized={true}
              alt={"Jarod Christiansen profile image"}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 1, x: -25 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 2, staggerChildren: true }}
            className="text-column"
          >
            <span>
              My name is Jarod Christiansen, I am a Software Engineer with years
              of experience in Software Engineering specializing in user
              interface design and development. The primary programming
              languages I work with are Javascript (TypeScript), Python, and
              Solidity. The primary libraries/frameworks I have experience with
              are React, NextJS, Apollo (GraphQL), Node, and Express. I am also
              familiar with Remix, Hardhat, Ganache, Truffle, and Open Zeppelin
              for smart contract (web3) development
            </span>

            <span>
              With years of experience in digital marketing, implementing onsite
              development for national as well as local SEO campaigns, WCAG 2.2
              accessibility implementation, and responsive data analysis /
              visualization, my skillset lends itself to many areas of software
              engineering. I am passionate about designing and Engineering
              captivating responsive user experiences as I believe they are the
              backbone of any well-designed application.
            </span>
          </motion.div>
        </div>
      </AboutMeContainer>

      <motion.div
        initial={{ opacity: 0, scale: 1, y: 25 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 2 }}
        className="image-container"
      >
        <div className="project-container">
          <h2>Projects</h2>
          {ProjectBlocks}
        </div>
      </motion.div>

      <motion.div
        animate={{
          y: ["50%", "0%", "-50%", "0%", "50%", "0%", "-50%", "0%"],
        }}
        transition={{
          y: {
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className={"up-arrow"}
      >
        <FaArrowUp size={36} className="arrow" onClick={() => scrollToTop()} />
      </motion.div>
    </PageContainer>
  );
}

const IntroBanner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  height: 80vh;
  text-align: center;

  @media ${MediaQueries.MD} {
    text-align: left;
  }

  .text-container {
    margin: auto;
    font-size: 2rem;

    h2 {
      line-height: 5rem;

      @media ${MediaQueries.MD} {
        line-height: 3.5rem;
      }

      .name-text {
        padding: 1rem;
        color: rgb(27, 185, 194);
      }
    }
  }

  button {
    background-color: white;
    border: 2px solid rgb(27, 185, 194);
    color: rgb(27, 185, 194);
    width: fit-content;
    padding: 1rem;
    text-transform: uppercase;
    letter-spacing: 0.05rem;
    font-weight: 900;
    border-radius: 5px;

    :hover:enabled {
      color: white;
      text-decoration: underline;
      cursor: pointer;

      background: rgb(27, 185, 194);
      background: linear-gradient(
        131deg,
        rgba(27, 185, 194, 1) 0%,
        rgba(27, 194, 181, 1) 48%,
        rgba(27, 194, 173, 1) 100%
      );

      -webkit-transition: background 1s ease-out;
      -moz-transition: background 1s ease-out;
      -o-transition: background 1s ease-out;
      transition: background 1s ease-out;
    }
  }
`;

const HoverDiv = styled.div`
  position: absolute;
  width: fit-content;
  padding: 0.5rem 1.5rem;

  color: white;
  border-radius: 32px;
  border: 2px solid black;

  background: rgb(27, 185, 194);

  top: ${(props) => (props.isRight ? "-4rem" : "unset")};
  bottom: ${(props) => (props.isRight ? "unset" : "-4rem")};

  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;

  span {
    align-self: center;
    margin-top: 2rem;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 0.1rem;
  }

  @media ${MediaQueries.LG} {
    top: unset;
    bottom: unset;

    left: ${(props) => (props.isRight ? "-2rem" : "unset")};
    right: ${(props) => (props.isRight ? "unset" : "-2rem")};

    bottom: -1rem;
    margin-left: unset;
    margin-right: unset;
  }
`;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
  text-align: center;

  .up-arrow {
    .arrow {
      cursor: pointer;
    }
  }

  .project-container {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    h2 {
      font-size: 3rem;
    }

    @media ${MediaQueries.LG} {
      max-width: 90rem;
      margin: auto;
    }
  }
`;

const AboutMeContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: white;

  background: rgb(27, 185, 194);
  background: linear-gradient(
    131deg,
    rgba(27, 185, 194, 1) 0%,
    rgba(27, 194, 181, 1) 48%,
    rgba(27, 194, 173, 1) 100%
  );

  -webkit-clip-path: unset;
  clip-path: unset;

  h2 {
    font-weight: bold;
    font-size: 2rem;
    text-transform: uppercase;
    letter-spacing: 0.05rem;
  }

  .top-text-row {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 2rem;
    padding-bottom: 3rem;
    padding: 0 2rem;

    .image-container {
      width: 100%;
      margin: auto;

      > div {
        position: unset !important;
      }

      .image {
        object-fit: contain;
        position: relative !important;
        height: unset !important;
        width: 60%;
        border-radius: 5px;

        @media ${MediaQueries.MD} {
          width: 50% !important;
        }

        @media ${MediaQueries.LG} {
          width: 85% !important;
        }
      }
    }

    .text-column {
      display: flex;
      flex-direction: column;
      text-align: start;
      margin: auto;
      max-width: 30rem;

      @media ${MediaQueries.LG} {
        max-width: 60%;
      }

      span {
        padding: 1rem 0;
        font-size: 1.05rem;
      }
    }

    @media ${MediaQueries.MD} {
      padding-bottom: 7rem;
    }

    @media ${MediaQueries.LG} {
      flex-direction: row;
      align-items: center;
      padding: 1rem 10rem;
      padding-bottom: 9rem;
    }
  }

  @media ${MediaQueries.MD} {
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 82%, 0 100%);
    clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
  }

  @media ${MediaQueries.LG} {
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
    clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
  }
`;

const RowContainer = styled.div`
  .change-container {
    display: flex;
    flex-direction: column;
    padding: 2rem 0;
    box-shadow: 2px 4px 12px gray;
    border-radius: 12px;
    border: 1px solid black;
    gap: 5rem;

    @media ${MediaQueries.LG} {
      border: unset;
      border-top: 1px solid gray;
      box-shadow: unset;
      border-radius: unset;

      margin: auto;
      flex-direction: row;
      justify-content: space-between;
      padding: 2rem 8rem;
      align-items: center;
      gap: 2rem;
    }
  }

  .button-container {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    text-align: center;
    justify-content: center;

    @media ${MediaQueries.LG} {
      text-align: start;
      justify-content: start;
    }

    .live-button {
      background-color: white;
      border: 2px solid rgb(27, 185, 194);
      color: rgb(27, 185, 194);
      width: fit-content;
      padding: 1rem;
      text-transform: uppercase;
      letter-spacing: 0.05rem;
      font-weight: 900;
      border-radius: 5px;

      :hover:enabled {
        color: white;
        text-decoration: underline;
        cursor: pointer;

        background: rgb(27, 185, 194);
        background: linear-gradient(
          131deg,
          rgba(27, 185, 194, 1) 0%,
          rgba(27, 194, 181, 1) 48%,
          rgba(27, 194, 173, 1) 100%
        );

        -webkit-transition: background 1s ease-out;
        -moz-transition: background 1s ease-out;
        -o-transition: background 1s ease-out;
        transition: background 1s ease-out;
      }

      :disabled {
        background-color: white;
        border: 2px solid gray;
        cursor: not-allowed;
        color: gray;
      }
    }

    .code-button {
      color: rgb(27, 185, 194);
      width: fit-content;
      padding: 1rem;
      text-transform: uppercase;
      letter-spacing: 0.05rem;
      font-weight: 900;
      border-radius: 5px;
      border: none;
      background-color: white;

      :hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
`;

const Block = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  text-align: center;
  height: fit-content;
  gap: 3rem;

  .block-text-column {
    display: flex;
    flex-direction: column;

    h3 {
      font-size: 2.5rem;
    }

    h4 {
      font-size: 1.25rem;
    }

    span {
      font-size: 1rem;
    }
  }

  @media ${MediaQueries.LG} {
    text-align: start;
    min-width: 29rem;
    max-width: 33rem;
  }
`;

const ImageBlock = styled.div`
  position: relative;
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
  box-shadow: 2px 4px 12px gray;

  @media ${MediaQueries.LG} {
    border: unset;
    box-shadow: 2px 4px 12px lightgray;
    border-radius: 5px;
  }
`;
