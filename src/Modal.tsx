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
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(20, 20, 20, 0.7);
  display: flex;
  animation: ${fadeIn} 0.3s ease-in-out;
`;
const Container = styled.div`
  background: #fff;
  padding: 20px 15px 25px;
  border-radius: 15px;
  color: #222;
  margin: auto;
  width: 400px;
  animation: ${fadeUp} 0.2s ease-out;
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
        <Container>{children}</Container>
      </Background>
    </>,
    document.body
  );
}

export default Modal;
