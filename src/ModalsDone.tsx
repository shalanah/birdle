import React, { ReactNode } from "react";
import Modal from "./Modal";
import Birds from "./assets/Birds";
import { getRandomFromArray, congrats, fail } from "./utils";
import useImage from "react-use-image";
import useGameContext from "./hooks/useGameContext";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  font-size: 18px;
  margin-bottom: 10px;
  margin-top: 10px;
  h2 {
    margin: 0 auto 10px;
    max-width: 300;
    line-height: 1.2;
    font-family: Kurale, sans-serif;
    font-size: 30px;
  }
  strong {
    letter-spacing: 0.05em;
    text-transform: uppercase;
    background: #6aaa64;
    padding: 5px 10px;
    color: #fff;
    border-radius: 5px;
  }
  a {
    color: #6aaa64;
    text-decoration: underline;
    text-underline-offset: 0.2em;
  }
  .img {
    /* Padding of modal is 15px... TODO: pull in as var */
    width: calc(100% + 30px);
    margin-left: -15px;
    margin-right: -15px;
    img,
    svg {
      width: 100%;
      height: auto;
    }
  }
`;

// Used for both success + fail modals
const ModalDone = ({
  todaysWord,
  heading,
  img,
  wiki,
}: {
  todaysWord: string;
  heading: string;
  img: ReactNode;
  wiki: string;
}) => {
  return (
    <Container>
      <h2>{heading}</h2>
      <div className="img">{img}</div>
      <p style={{ marginBottom: 15 }}>
        Today's word was <strong>{todaysWord}</strong>
      </p>
      <p>
        Read about this bird on{" "}
        <a
          target="_blank"
          rel={"noopener noreferrer"}
          href={`https://en.wikipedia.org/wiki/${wiki}`}
        >
          wikipedia
        </a>
      </p>
    </Container>
  );
};

export const ModalSuccess = () => {
  const { attempts, todaysWord, wiki } = useGameContext();
  const guessCount = attempts.length;
  return (
    <Modal delay={2000}>
      <ModalDone
        wiki={wiki}
        todaysWord={todaysWord}
        heading={congrats[guessCount - 1]}
        img={
          <Birds
            title={`${todaysWord.length + 1 - guessCount} cute birds`}
            guessCount={guessCount}
            style={{
              marginTop: 40,
              marginBottom: 60,
            }}
          />
        }
      />
    </Modal>
  );
};

export const ModalFail = () => {
  const { todaysWord, wiki } = useGameContext();
  const src = "/nest.jpg";
  useImage(src); // preload image delay is probably long enough also that it should be loaded
  return (
    <Modal delay={2000}>
      <ModalDone
        wiki={wiki}
        img={
          <img
            alt={"empty nest"}
            src={src}
            style={{
              marginTop: 10,
              marginBottom: 40,
            }}
          />
        }
        todaysWord={todaysWord}
        heading={getRandomFromArray(fail)}
      />
    </Modal>
  );
};
