import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  left: 50%;
  top: 0px;
  background: #fff;
  border-radius: 4px;
  color: #000;
  transform: translateX(-50%);
  padding: 10px 15px;
`;

// TODO: Could make nice float in and away animations
function Toast({ text, ...props }: { text: string }) {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
    }, 2000);
  }, [visible]);
  return visible
    ? createPortal(<Container {...props}>{text}</Container>, document.body)
    : null;
}

export default Toast;
