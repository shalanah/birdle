import React, { ReactNode } from "react";
import Modal from "./Modal";
import Birds from "./assets/Birds";
import { getRandomFromArray } from "./utils";

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

// Ordered
const congrats = [
  "OMG! Outstanding!",
  "You're a bird-brainiac!",
  "We're birds of a feather!",
  "Birds like you ❤️",
  "Well-done, and with a guess to spare!",
  "Whew... that was a close one!",
];
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

const fail = [
  "Not this time...",
  "That's tough.",
  "Looks like you came up empty this time",
  "You'll get it next time",
  "It's the lows in life that make the highs so great",
  "Making mistakes is how we grow",
  "I feel like you got this, tomorrow",
];
export const ModalFail = ({
  todaysWord,
  wiki,
}: {
  todaysWord: string;
  wiki: string;
}) => {
  return (
    <Modal delay={2000}>
      <Shared
        wiki={wiki}
        img={
          <img
            src={"/nest.png"}
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
