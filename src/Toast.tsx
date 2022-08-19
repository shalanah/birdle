import React from "react";
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

function Toast({ text, ...props }: { text: string }) {
  return createPortal(<Container {...props}>{text}</Container>, document.body);
}

export default Toast;
