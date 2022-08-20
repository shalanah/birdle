import React, { useState, ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";
import styled, { keyframes } from "styled-components";

const fadeUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100%{
    opacity: 1;
    transform: translateY(0);
  }
`;
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Background = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background: rgba(20, 20, 20, 0.7);
  display: flex;
  animation: ${fadeIn} 0.3s ease-in-out;
`;
const Container = styled.div`
  position: relative;
  padding: 20px 15px 25px;
  color: #222;
  margin: auto;
  width: 400px;
  animation: ${fadeUp} 0.2s ease-out;
  :before {
    content: "";
    z-index: -1;
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    background: #fff;
    border-radius: 15px;
    overflow: hidden;
  }
`;

// This modal is only for the success + fail screens right now
function Modal({
  children = null,
  delay = 0, // milliseconds
}: {
  children: ReactNode;
  delay?: number;
}) {
  const [show, setShow] = useState(true);
  const [waitOver, setWaitOver] = useState(delay === 0);

  // Optional delay
  useEffect(() => {
    if (!waitOver) {
      setTimeout(() => {
        setWaitOver(true);
      }, delay);
    }
  }, [waitOver]);

  // Handle escape key
  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && show && waitOver) {
        setShow(false);
      }
    };
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("keydown", onEsc);
    };
  }, [show, waitOver]);

  if (!(show && waitOver)) return null;
  return createPortal(
    <>
      <Background onClick={() => setShow(false)}>
        <Container>
          <button
            autoFocus={true}
            onClick={() => setShow(false)}
            style={{
              position: "absolute",
              right: 5,
              top: -35,
              width: 28,
              height: 28,
              padding: "8px",
              borderRadius: "100%",
            }}
          >
            <svg
              viewBox="0 0 1 1"
              style={{
                width: "100%",
                height: "100%",
              }}
            >
              <path
                d="M0,0 1,1 M0,1 1,0"
                stroke="#ccc"
                strokeWidth={2}
                vectorEffect={"non-scaling-stroke"}
              />
            </svg>
          </button>
          {children}
        </Container>
      </Background>
    </>,
    document.body
  );
}

export default Modal;
