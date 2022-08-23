import { keyframes } from "styled-components";
import { bg } from "./utils";

export const Bounce = keyframes`
  0% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

export const Spin = keyframes`
  0% {
    transform: rotateZ(0);
    background: ${bg.normal};
    border-color: #565758;
  }
  49.99999% {
    background: ${bg.normal};
    border-color: #565758;
  }
  50% {
    background: var(--bg);
    transform: rotateX(90deg);
  }
  100% {
    border-color: transparent;
    background: var(--bg);
    transform: rotateZ(0deg);
  }
`;

export const FadeUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100%{
    opacity: 1;
    transform: translateY(0);
  }
`;

export const FadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// Inspired by https://css-tricks.com/snippets/css/shake-css-keyframe-animation/
export const Shake = keyframes`
  10%, 90% {
    transform: translate(-5px, 0);
  }
  20%, 80% {
    transform: translate(5px, 0);
  }
  30%, 50%, 70% {
    transform: translate(-5px, 0);
  }
  40%, 60% {
    transform: translate(5px, 0);
  }
`;
