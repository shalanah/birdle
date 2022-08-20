import React, { ReactNode } from "react";
import Modal from "./Modal";
import Birds from "./assets/Birds";
import { getRandomFromArray, congrats, fail } from "./utils";
import useImage from "react-use-image";

const Shared = ({
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
    <div
      style={{
        textAlign: "center",
        fontSize: 18,
        marginBottom: 10,
        marginTop: 10,
      }}
    >
      <h2
        style={{
          margin: "0 auto 10px",
          maxWidth: 300,
          lineHeight: 1.2,
          fontFamily: "Kurale, sans-serif",
          fontSize: 30,
        }}
      >
        {heading}
      </h2>
      {img}
      <p style={{ marginBottom: 15 }}>
        Today's word was{" "}
        <strong
          style={{
            letterSpacing: ".05em",
            textTransform: "uppercase",
            background: "#6aaa64",
            padding: "5px 10px",
            color: "#fff",
            borderRadius: 5,
          }}
        >
          {todaysWord}
        </strong>
      </p>
      <p>
        Read about this bird on{" "}
        <a
          target="_blank"
          rel={"noopener noreferrer"}
          href={`https://en.wikipedia.org/wiki/${wiki}`}
          style={{
            color: "#6aaa64",
            textDecoration: "underline",
            textUnderlineOffset: ".2em",
          }}
        >
          wikipedia
        </a>
      </p>
    </div>
  );
};

export const ModalSuccess = ({
  todaysWord = "",
  guessCount = 6,
  wiki = "",
}) => {
  return (
    <Modal delay={2000}>
      <Shared
        wiki={wiki}
        todaysWord={todaysWord}
        heading={congrats[guessCount - 1]}
        img={
          <Birds
            guessCount={guessCount}
            style={{
              margin: "40px -15px 60px -15px",
              width: "calc(100% + 30px)",
            }}
          />
        }
      />
    </Modal>
  );
};

export const ModalFail = ({
  todaysWord,
  wiki,
}: {
  todaysWord: string;
  wiki: string;
}) => {
  const src = "/nest.jpg";
  useImage(src); // preload image delay is probably long enough also that it should be loaded
  return (
    <Modal delay={2000}>
      <Shared
        wiki={wiki}
        img={
          <img
            src={src}
            style={{
              margin: "10px -15px 40px -15px",
              width: "calc(100% + 30px)",
            }}
          />
        }
        todaysWord={todaysWord}
        heading={getRandomFromArray(fail)}
      />
    </Modal>
  );
};
